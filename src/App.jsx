import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

// author { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/victorpsaar.png',
      name: 'Victor Porto',
      role: 'Developer web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLM Return, evento da Rocketseat. O nome do projeto é DoctorCare!' },
      { type: 'link', content: 'victor.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-05 18:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RafaelHGS.png',
      name: 'Rafael',
      role: 'Developer web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLM Return, evento da Rocketseat. O nome do projeto é DoctorCare!' },
      { type: 'link', content: 'victor.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-04 12:11:00')
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
