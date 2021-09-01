import styles from "./products.module.scss";
import Card from "./productCard";

export default function Products({ title, products }) {
    return (
        <div className={"container " + styles.products}>
            <h2> {title} </h2>

            <ul>
                {products.map((item, index) => {
                    return (
                        <li key={index}>
                            <Card isPrior={!!(index < 5)} {...item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
