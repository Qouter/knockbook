import { CategoryScale, Chart, LinearScale } from 'chart.js'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
Chart.register(CategoryScale, LinearScale)

export default function PlaylistDetail({ playlist }) {
  const [analyzedTracks, setAnalyzedTracks] = useState([])
  const [tempoArray, setTempoArray] = useState([])
  const [danceabilityArray, setDanceabilityArray] = useState([])

  useEffect(() => {
    const getTrackAnalysis = async trackIds => {
      const res = await fetch('/api/analysis', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          track_id: trackIds
        })
      })
      const {
        items: { audio_features }
      } = await res.json()

      setAnalyzedTracks(
        audio_features.map(audio_feature => audio_feature.id.slice(0, 3))
      )
      setTempoArray(audio_features.map(audio_feature => audio_feature.tempo))
      setDanceabilityArray(
        audio_features.map(audio_feature => audio_feature.danceability)
      )
    }

    const getMyPlaylistTracks = async playlist_id => {
      const res = await fetch('/api/tracks', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          playlist_id
        })
      })
      const { items } = await res.json()

      const trackIds = items.map(item => item.track.id)

      if (trackIds.length > 0) {
        await getTrackAnalysis(trackIds.join(','))
      }
    }

    getMyPlaylistTracks(playlist)
  }, [playlist, setAnalyzedTracks, setTempoArray, setDanceabilityArray])

  const tempoData = {
    labels: analyzedTracks,
    datasets: [
      {
        label: 'Tempo',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgb(180, 160, 229)',
        borderColor: 'rgba(56, 29, 42)',
        borderWidth: 2,
        data: tempoArray
      }
    ]
  }

  const danceabilityData = {
    labels: analyzedTracks,
    datasets: [
      {
        label: 'Danceability',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgb(255, 126, 107)',
        borderColor: 'rgba(54, 5, 104)',
        borderWidth: 2,
        data: danceabilityArray
      }
    ]
  }

  return (
    <div className="flex flex-col items-center justify-center w-3/5 h-1/3">
      <Line
        height={'90%'}
        data={tempoData}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: false
          }
        }}
      />
      <Line
        height={'90%'}
        data={danceabilityData}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: false
          }
        }}
      />
    </div>
  )
}
