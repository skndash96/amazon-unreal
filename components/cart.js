import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { products } from "../fakedata";
import Products from "./products";
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
            {!data
            ? <div className="loading">...</div>
            : <div>
                <div className="cart-details">
                    <h2> Billing </h2>
                    
                    <ul>
                        {data.map((item, index) => 
                            <li>
                                {item.title.split(/ +/).slice(0, 3).join(' ') + '..'}
                                <span>
                                    {cart[index]?.count || 0}
                                </span>
                            </li>
                        )}
                        <li className="total">
                            Total Items:
                            <span>
                                {cart.length}
                            </span>
                        </li>
                        <li className="total">
                            Total Price:
                            <span>
                                <span>$</span>{data.reduce(
                                    (cost, item, index) => (cost + item.price) * cart[index]?.count || 0, 0)
                                }
                            </span>
                        </li>
                    </ul>
                </div>
                
                <Products products={data} title="Cart" isCart={true} isMinimal={true} />
            </div>
            }
        </div>
    );
}
