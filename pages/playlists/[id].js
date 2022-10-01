import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import AppLayout from '../../components/AppLayout'
import PlaylistDetail from '../../components/PlaylistDetail'

export default function Playlist() {
  const [list, setList] = useState([])
  const router = useRouter()

  useEffect(() => {
    const getMyPlaylists = async () => {
      const res = await fetch('/api/playlists', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          userId: router.query.userId
        })
      })
      const { items } = await res.json()

      setList(items)
    }

    getMyPlaylists()
  }, [router.query.userId, setList])

  let playlist =
    list && list.filter(playlist => playlist.id === router.query.id)[0]

  const retDiv = playlist ? (
    <div className="flex items-center justify-center w-screen h-screen">
      <PlaylistDetail playlist={playlist.id} />
    </div>
  ) : (
    <div className="flex items-center justify-center w-screen h-screen">
      <h2>LOADING...</h2>
    </div>
  )

  return retDiv
}

Playlist.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true
  }
}

export async function getStaticProps() {
  return {
    props: {
      products: []
    }
  }
}
