import styles from "./products.module.scss";
import Product from "./product";

export default function Products({ title, products }) {
    return (
        <div className={"container " + styles.products}>
            <h2> {title} </h2>

            <ul>
                {products.map((item, index) => {
                    return (
                        <li key={index}>
                            <Product {...item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
