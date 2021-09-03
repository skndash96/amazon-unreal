import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <span>
                {" "}
                <a href="#top"> Go to Top </a>{" "}
            </span>

            <ul>
                <li> Find a Gift </li>
                <li> Sell your Products </li>
                <li> Your Account </li>
                <li> Refunds </li>
                <li> Donate </li>
                <li> Customer Service </li>
            </ul>

            <ul>
                <li> Terms of Service </li>
                <li> Privacy Policy </li>
                <li> Advertisements </li>
            </ul>
        </div>
    );
}
