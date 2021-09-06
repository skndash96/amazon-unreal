import { useSelector, useDispatch } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { products } from "../fakedata";
import Products from "./products";
import styles from "./cart.module.scss";
import { FaPlus } from "react-icons/fa";
import gsap from 'gsap'

export default function CartPage() {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch()

    const popupRef = useRef()
    
    const [data, setData] = useState(null);

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
    
    const handlePopup = (isOpen) => {
        if (isOpen) {
            dispatch({
                type: 'POP_UP',
                payload: {
                    data: (<>
                        <button onClick={() => handlePopup(false)} className="close">
                            <FaPlus />
                        </button>
                        <h4 className="title">
                            Order Recieved
                        </h4>
                        <p className="description">
                            We tracked your IP address and location, and your order will be delivered within {Math.floor(Math.random() * 28) + Math.floor(Math.random() * 10)} hours.
                        </p>
                        <button className="cta" onClick={() => handlePopup(false)}>
                            Okay
                        </button>
                    </>)
                }
            })
        } else {
            dispatch({
                type: 'POP_DOWN'
            })
        }
    }

    return (
        <>
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
                                onClick={() => parseInt(bill) && handlePopup(true)}
                            >
                                Place Order
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
