import styles from "./products.module.scss";
import Card from "./productCard";

export default function Products({
    title,
    titleLength,
    products,
    isMinimal,
    isCart,
    isWishlist,
    isResults,
}) {
    return (
        <div
            className={`container ${isResults ? styles.results : ""} ${
                styles.products
            }`}
        >
            <h2> {title} </h2>

            <ul>
                {products.length ? (
                    products.map((item, index) => {
                        return (
                            <li key={index}>
                                <Card
                                    titleLength={titleLength}
                                    isWishlist={isWishlist}
                                    isPrior={!!(index < 5)}
                                    isCart={isCart}
                                    isMinimal={isMinimal}
                                    {...item}
                                />
                            </li>
                        );
                    })
                ) : (
                    <li>
                        <span>No matches.</span>
                    </li>
                )}
            </ul>
        </div>
    );
}
