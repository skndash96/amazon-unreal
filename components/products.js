import { products } from "../fakedata";
import styles from "./products.module.scss";
import Product from "./product";

export default function Products() {
    return (
        <div className={"container " + styles.products}>
            <h2> 🔥 Best Sellers </h2>

            <ul>
                {products().map((item, index) => {
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
