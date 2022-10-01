import { getSession } from 'next-auth/react'

import { getPlaylistTracks } from '../../lib/spotify'

const handler = async (req, res) => {
  const {
    token: { accessToken }
  } = await getSession({ req })
  const { playlist_id } = req.body
  const response = await getPlaylistTracks(playlist_id, accessToken)
  const { items } = await response.json()

  return res.status(200).json({ items })
}

export default handler
