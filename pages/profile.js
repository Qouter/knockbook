import AppLayout from '../components/AppLayout'
import Post from '../components/Post'
import { sanityClient, urlFor } from '../sanity'

export default function Profile({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="flex items-center justify-center text-2xl mb-11">Posts</h1>
      <div className="flex flex-col justify-center">
        {posts.map(post => (
          <Post
            title={post.title}
            key={post._id}
            body={post.body.children.text}
            authorImage={post.authorImage}
          />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
  _id,
  title,
  author->{
  name,
  image
  },
  "body": body[0]{
    children[0]{
      text
    },
  },
  }`

  const posts = await sanityClient.fetch(query)
  let postsWithImages = []

  for (let index = 0; index < posts.length; index++) {
    const post = posts[index]
    const authorImage = await urlFor(post.author.image.asset._ref).url()
    postsWithImages.push({ ...post, authorImage: authorImage })
  }

  return {
    props: {
      posts: postsWithImages
    }
  }
}

Profile.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}
