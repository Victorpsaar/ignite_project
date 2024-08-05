import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={"https://github.com/victorpsaar.png"}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Porto</strong>
                            <time title='8 de agosto às 11:48' dateTime="2024-08-05">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Victor, parabens!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}