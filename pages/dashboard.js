import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

import AppLayout from '../components/AppLayout'
import Pagination from '../components/Pagination'

export default function Dashboard() {
  const { data: session } = useSession()
  const [list, setList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(4)
  const authFunction = () => (session ? signOut() : signIn())

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        userId: session.token.sub
      })
    })
    const { items } = await res.json()

    setList(items)
  }

  const createPlaylistRows = () => {
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    return [...list]
      .slice(indexOfFirstRecord, indexOfLastRecord)
      .map(playlist => {
        return (
          <tr
            key={playlist.id}
            className="bg-white dark:bg-gray-800 dark:border-gray-700 rounded-xl"
          >
            <td className="flex items-center justify-center px-6 py-4">
              <Image
                src={playlist.images[0]?.url}
                width={70}
                height={70}
                alt="Playlist"
              />
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <p className="w-24 overflow-hidden text-ellipsis">
                {playlist.name}
              </p>
            </td>
            <td className="px-6 py-4 w-15">{playlist.tracks.total}</td>
            <td className="px-6 py-4 w-15">
              <Link
                href={{
                  pathname: `./playlists/${playlist.id}`,
                  query: { userId: session.token.sub }
                }}
                className="group"
              >
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  See
                </a>
              </Link>
            </td>
          </tr>
        )
      })
  }

  const printPlaylists = () => {
    return (
      <div className="w-1/2 shadow-lg rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 rounded border-t-secondary dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 shadow-inner rounded-xl dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 rounded-l-lg"></th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Number of Tracks</th>
              <th className="px-6 py-3 rounded-r-lg">Graph</th>
            </tr>
          </thead>
          <tbody>{createPlaylistRows()}</tbody>
        </table>
        <div className="flex items-center justify-center h-12 flex-column">
          <Pagination
            nPages={Math.ceil(list.length / recordsPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    )
  }

  const getPlaylistsButton = () => {
    return list.length > 0 ? (
      printPlaylists()
    ) : (
      <button
        className="p-5 m-2 text-sm text-gray-700 bg-gray-100 rounded-lg shadow-md w-34"
        onClick={() => getMyPlaylists()}
      >
        Get all my playlists
      </button>
    )
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen text-2xl">
      <div className="items-center w-full h-[6%]">
        <div className="flex items-center justify-end">
          <p className="min-h-full text-sm">
            {session && session.token ? session.token.email : ''}
          </p>
          <button
            className="w-24 p-1 m-6 text-sm text-gray-700 rounded-lg shadow-md"
            onClick={() => authFunction()}
          >
            {session ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
      <div className="w-full h-[90%]">
        <div className="flex items-center justify-center h-full rounded-xl">
          {session ? getPlaylistsButton() : <p>Grapify</p>}
        </div>
      </div>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}
