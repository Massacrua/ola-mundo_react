import styles from "./Inicio.module.css"
import postes from "json/posts.json"
import PostCard from "componentes/PostCard";

export default function Inicio({ posts=postes }) {
    return (
        <ul className={styles.posts}>
            {posts.map(post => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
    )
}

