import styles from "./popup.module.scss";

export default function Popup({ children }) {
    return (
        <div className={styles.popup}>
            <div className="pop">{children}</div>
        </div>
    );
}
