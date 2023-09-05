import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"

export default function Post() {
    const parametros = useParams()

    
    const post = posts.find(post => post.id === Number(parametros.id))
    console.log(post)

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            Texto...
        </PostModelo>
    )
}