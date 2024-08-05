import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://via.placeholder.com/500x200" alt="" />

            <div className={styles.profile}>
                <Avatar src={"https://github.com/victorpsaar.png"} />
                <strong>Victor Porto</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}