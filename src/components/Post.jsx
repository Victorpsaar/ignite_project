import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={"https://github.com/victorpsaar.png"} />
                    <div className={styles.authorInfo}>
                        <strong>Victor Porto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='8 de agosto às 11:48' dateTime="2024-08-05">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa</p>
                <p>Acabei de subir mais um projeto no meu portifolio. É um projeto </p>que fiz no NLM Return, evento da Rocketseat. O nome do projeto é DoctorCare!
                <p><a href="">victor.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlm</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}