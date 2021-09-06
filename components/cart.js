import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { products } from "../fakedata";
import Products from "./products";
import styles from "./cart.module.scss";
import Popup from "./popup";
import { FaPlus } from "react-icons/fa";

export default function CartPage() {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [popup, setPopup] = useState(false);

    const bill =
        data
            ?.reduce(
                (cost, item, index) =>
                    (cost + item.price) * cart[index]?.count || 0,
                0
            )
            ?.toFixed(2) || 0;

    useEffect(() => {
        setData(
            cart.slice().map((item) => ({
                ...products(item.id),
            }))
        );
    }, [cart.length]);

    return (
        <>
            {popup && (
                <Popup>
                    <button onClick={() => setPopup(false)} className="close">
                        <FaPlus />
                    </button>
                    <h4 className="title">Become a StarGazer</h4>
                    <p className="description">
                        A <span> star </span> for this site is worth more than{" "}
                        <span> {parseInt(bill) || 0} bucks </span> and you can
                        get your cart items for free!
                    </p>
                    <button className="cta">
                        <a
                            href="https://github.com/skndash96/amazon-unreal"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            Do it!{" "}
                        </a>
                    </button>
                </Popup>
            )}

            <div className={"container " + styles.cart}>
                {!data ? (
                    <div className="loading">...</div>
                ) : (
                    <div>
                        <div className="cart-details">
                            <h2> Billing </h2>

                            <ul>
                                {data.map((item, index) => (
                                    <li key={index}>
                                        {item.title
                                            .split(/ +/)
                                            .slice(0, 3)
                                            .join(" ") + ".."}
                                        <span>{cart[index]?.count || 0}</span>
                                    </li>
                                ))}
                                <li className="total">
                                    Total Items:
                                    <span>{cart.length}</span>
                                </li>
                                <li className="total">
                                    Total Price:
                                    <span>
                                        <span>$</span>
                                        {bill}
                                    </span>
                                </li>
                            </ul>

                            <button
                                className={parseInt(bill) ? "" : "disabled"}
                                onClick={() => parseInt(bill) && setPopup(true)}
                            >
                                Buy it
                            </button>
                        </div>

                        <Products
                            products={data}
                            title="Cart"
                            isCart={true}
                            isMinimal={true}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
