import styles from "./popup.module.scss";
import { useSelector } from 'react-redux'

export default function Popup({ children }) {
    const data = useSelector(state => state.popup)
    
    return (
        data
        ? <div id="popup" className={styles.popup}>
            <div className="pop">{data}</div>
        </div>
        : null
    );
}
