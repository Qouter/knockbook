const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const SPOTIFY_API_PREFIX = 'https://api.spotify.com/v1'
const playlistEnpodint = userId =>
  `${SPOTIFY_API_PREFIX}/users/${userId}/playlists`
const playlist_tracks_endpoint = playlist_id =>
  `${SPOTIFY_API_PREFIX}/playlists/${playlist_id}/tracks`
const track_analysis_endpoint = track_id =>
  `${SPOTIFY_API_PREFIX}/audio-features?ids=${track_id}`

const getAccessToken = async refresh_token => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getUsersPlaylists = async (user_id, refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token)
  return fetch(playlistEnpodint(user_id), {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getPlaylistTracks = async (playlist_id, refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token)
  return fetch(playlist_tracks_endpoint(playlist_id), {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTrackAnalysis = async (track_id, refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token)
  return fetch(track_analysis_endpoint(track_id), {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
