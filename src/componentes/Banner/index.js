import styles from "./Banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/foto_eu.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo bão!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Guilherme Dalla Rosa, desenvolvedor Front-End e aluno da Alura. Este é um projeto em SPA de estudos de React Router Dom '')
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antonio sorrindo."
                />
            </div>
        </div>
    )
}