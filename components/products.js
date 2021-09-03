import styles from "./products.module.scss";
import Card from "./productCard";

export default function Products({ title, products, isCart, isWishlist }) {
    return (
        <div className={"container " + styles.products}>
            <h2> {title} </h2>

            <ul>
                {products.length ? (
                    products.map((item, index) => {
                        return (
                            <li key={index}>
                                <Card
                                    isWishlist={isWishlist}
                                    isPrior={!!(index < 5)}
                                    isCart={isCart}
                                    {...item}
                                />
                            </li>
                        );
                    })
                ) : (
                    <li>
                        <span>Oops, there&apos;s nothing here.</span>
                    </li>
                )}
            </ul>
        </div>
    );
}
