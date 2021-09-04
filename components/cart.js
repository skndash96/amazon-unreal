import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { products } from "../fakedata";
import Products from "./products";
import Header from "./header";
import Footer from "./footer";
import styles from "./cart.module.scss";

export default function CartPage() {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(
            cart.slice().map((item) => ({
                ...products(item.id)
            }))
        );
    }, [cart.length]);

    return (
        <div className={"container " + styles.cart}>
            <Header />

            {!data ? (
                <div className="loading">...</div>
            ) : (
                <>
                    <Products products={data} title="Cart" isCart={true} />
                    <Products
                        products={products().slice(0, 5)}
                        title="You might like"
                    />
                </>
            )}

            <Footer />
        </div>
    );
}
