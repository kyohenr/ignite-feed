import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/129505311?v=4',
      name: 'Henrique',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Random message 🌹' },
      { type: 'link', content: 'GitHub' },
    ],
    publishedAt: new Date('2023-02-18 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/129505311?v=4',
      name: 'Kyo',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Random message' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, veritatis.',
      },
      { type: 'link', content: 'GitHub' },
    ],
    publishedAt: new Date('2023-02-16 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
