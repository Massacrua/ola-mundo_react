import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Antônio por enquanto...
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antonio"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis hendrerit risus. Integer justo quam, tempus eu ex id, placerat rutrum massa. 
            </p>            
            <p className={styles.paragrafo}>
                Morbi quis elementum nisi. Vivamus a lorem in nisi facilisis fringilla. Morbi egestas lacus nec neque congue, et suscipit odio consequat. Quisque eu fringilla justo, non luctus lectus. Duis vel rhoncus augue. 
            </p>
            <p className={styles.paragrafo}>
                Praesent ut erat id mauris laoreet euismod id nec ipsum. Duis ultricies libero mi, eget efficitur lacus euismod at. Donec euismod neque in convallis tincidunt. Proin dapibus dolor purus, in viverra ex laoreet in. Mauris a ligula lectus. 
            </p>
            <p className={styles.paragrafo}>
                Nulla sit amet mollis purus, eu placerat nulla. Fusce egestas tristique massa quis fermentum. Integer consectetur et erat vel cursus. Sed dignissim pharetra vestibulum. Donec aliquam turpis vitae convallis ornare. Donec a turpis a nunc gravida dignissim et in dui. Sed tempus ac diam a aliquam.
            </p>
            <p className={styles.paragrafo}>
                Maecenas mattis pretium faucibus. Vestibulum placerat elit nec diam condimentum semper. Nam placerat, sem sed tristique pretium, arcu tortor blandit diam, sit amet iaculis mauris ipsum nec libero. Quisque aliquet odio non mauris ultricies vestibulum. Proin condimentum vulputate felis. 
            </p>
            <p className={styles.paragrafo}>
                Vivamus ut est in lorem egestas imperdiet ac facilisis sem. Mauris volutpat eros in venenatis tempor. Proin ac turpis cursus augue mollis dapibus. Praesent at lorem vestibulum, luctus augue molestie, accumsan nunc. 
            </p>
        </PostModelo>
        
    )
}