import { getSession } from 'next-auth/react'

import { getUsersPlaylists } from '../../lib/spotify'

const handler = async (req, res) => {
  const {
    token: { accessToken }
  } = await getSession({ req })
  const { userId } = req.body
  const response = await getUsersPlaylists(userId, accessToken)
  const { items } = await response.json()

  return res.status(200).json({ items })
}

export default handler
