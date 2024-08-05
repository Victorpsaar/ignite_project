import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Victor' content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque doloribus officia, minus placeat expedita quos deleniti explicabo ea magni at aspernatur provident, debitis beatae enim necessitatibus aliquid, porro sed."/>
        </main>
      </div>
    </>
  )
}

export default App
