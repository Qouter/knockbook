import { getSession } from 'next-auth/react'

import { getTrackAnalysis } from '../../lib/spotify'

const handler = async (req, res) => {
  const {
    token: { accessToken }
  } = await getSession({ req })
  const { track_id } = req.body
  const response = await getTrackAnalysis(track_id, accessToken)
  const items = await response.json()

  return res.status(200).json({ items })
}

export default handler
