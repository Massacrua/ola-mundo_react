import styles from "./BotaoPrincipal.module.css"

export default function BotaoPrincipal({ children, grande }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${grande ? styles.lg : ""}
        `}>
            {children}
        </button>
    )
}