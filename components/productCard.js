import styles from "./productCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ImStarHalf, ImStarFull } from "react-icons/im";
import { RiDeleteBin7Fill, RiShoppingCartLine as RiCart } from "react-icons/ri";
import { HiSparkles, HiDotsVertical as HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function Product({
    title,
    category,
    description,
    image,
    rating,
    price,
    id,
    isPrior,
    isWishlist,
    isCart,
    isMinimal,
}) {
    const dispatch = useDispatch();
    const router = useRouter();

    const cartItem = useSelector((state) => state.cart).find(
        (item) => item.id === id
    );

    const [isOptionsActive, setIsOptionsActive] = useState(false);

    const toggleOptions = () => {
        setIsOptionsActive((state) => !state);
    };

    const handleAddCart = (remove) => {
        if (remove && !cartItem?.count) router.push("/cart");

        dispatch({
            type: remove ? "CART_REMOVE" : "CART_ADD",
            payload: {
                id: id,
            },
        });
    };

    return (
        <div className={`${styles.product} ${isMinimal ? styles.minimal : ""}`}>
            {isCart && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="cart-options"
                >
                    <div className={isOptionsActive ? "active" : ""}>
                        <button onClick={() => handleAddCart()}> + </button>
                        <span> {cartItem?.count || 0} </span>
                        <button onClick={() => handleAddCart(true)}>
                            {cartItem?.count > 1 ? (
                                "-"
                            ) : (
                                <RiDeleteBin7Fill className="danger" />
                            )}
                        </button>
                    </div>
                    <button onClick={toggleOptions}>
                        <HiMenu />
                    </button>
                </div>
            )}

            <Link href={`/product/${id}`}>
                <div className="product-pic">
                    <Image
                        priority={isPrior}
                        objectFit="contain"
                        layout="fill"
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>

            <Link href={`/product/${id}`}>
                <div className="product-text">
                    <h4>{title.split(/ +/).slice(0, 7).join(" ") + ".."}</h4>
                    <p>
                        {description.split(/ +/).slice(0, 10).join(" ") + "..."}
                    </p>
                </div>
            </Link>

            <div className="product-price">
                <h3> $ {price} </h3>
            </div>

            <div className="product-rating">
                <span>
                    {new Array(parseInt(rating.rate)).fill(<ImStarFull />)}
                    {rating.rate - parseInt(rating.rate) > 0.2 && (
                        <ImStarHalf />
                    )}
                </span>
                <span>{rating.rate}</span>
                <span>({rating.count})</span>
            </div>
        </div>
    );
}
