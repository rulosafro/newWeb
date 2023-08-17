import { fetchData } from '@/services/fetchData'
import LikeButton from './LikeButton'

export default async function PostPage () {
  const data = await fetchData('https://jsonplaceholder.typicode.com/posts')

  return (
    <section className='px-12 '>
      {data.slice(0, 10).map(post => (
        <article key={post.id} className='pb-5'>
          <h2 className='text-3xl font-bold text-blue-500'>{post.title}</h2>
          <p className='font-light pb-3'>{post.body}</p>
          <LikeButton id={post.id} />

        </article>
      ))}
    </section>
  )
}
