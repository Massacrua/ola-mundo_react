import "./Post.css"
import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import NaoEncontrada from "paginas/NaoEncontrada"
import PaginaPadrao from "componentes/PaginaPadrao"
import PostCard from "componentes/PostCard"
import styles from "../../paginas/Inicio/Inicio.module.css"

export default function Post() {
    const parametros = useParams()

    const post = posts.find(post => post.id === Number(parametros.id))

    if (!post) {
        return <NaoEncontrada/>
    }

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
            <ul className={styles.posts} style={{marginTop: 0}}>
                {posts.filter(post => post.id != parametros.id).map(post => 
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                )}
            </ul>
        </PaginaPadrao>
    )
}