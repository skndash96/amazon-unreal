import styles from "./productInfo.module.scss";
import Image from "next/image";
import { ImStarHalf, ImStarFull } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { HiSparkles } from "react-icons/hi";
import gsap from 'gsap'
import { useEffect } from 'react'

export default function ProductInfo({
    title,
    description,
    rating,
    image,
    category,
    price,
    id,
}) {
    const { wishlist, cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const isInCart = cart.find((item) => item.id === id);
    const isInWishlist = wishlist.find((itemId) => itemId === id);

    const handleAddCart = (remove) => {
        if (!remove && !isInCart) {
            gsap.to("#cartAdd", {
                duration: 0.2,
                scale: 0,
                ease: "power3.easeIn",
                onComplete: () => dispatch({
                    type: 'CART_ADD',
                    payload: {
                        id: id
                    }
                })
            })
            gsap.from("#cartEdit", {
                duration: 0.2,
                opacity: 0
            })
            return
        } else if (remove && isInCart.count === 1) {
            gsap.to("#cartEdit", {
                duration: 0.2,
                scale: 0,
                ease: "power3.easeIn",
                onComplete: () => dispatch({
                    type: 'CART_REMOVE',
                    payload: {
                        id: id
                    }
                })
            })
            gsap.from('#cartAdd', {
                duration: 0.2,
                opacity: 0
            })
            
            return
        }
        
        dispatch({
            type: remove ? "CART_REMOVE" : "CART_ADD",
            payload: {
                id: id,
            },
        });
    };

    const handleAddWish = (remove) => {
        gsap.to("#wishEdit", {
            rotate: isInWishlist ? "0" : "360deg",
            onComplete: () => dispatch({
                type: remove ? "WISHLIST_REMOVE" : "WISHLIST_ADD",
                payload: {
                    id: id,
                },
            })
        })
    };
    
    useEffect(() => {
        gsap.from('#productPic', {
            y: "-100%"
        })
    }, [])

    return (
        <div className={"container " + styles.page}>
            <div id="productPic" className="product-pic">
                <Image
                    alt={title}
                    objectFit="contain"
                    layout="fill"
                    src={image}
                />
            </div>

            <div className="product-title">
                <h2>{title}</h2>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
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

            <h2 className="product-price">
                ${price} <span> (includes GST & taxes) </span>
            </h2>

            <div className="product-cta">
                {isInCart ? (
                    <div id="cartEdit" className="cart-edit">
                        <button onClick={() => handleAddCart()}> + </button>
                        {isInCart.count}
                        <button onClick={() => handleAddCart(true)}> - </button>
                    </div>
                ) : (
                    <button id="cartAdd" onClick={() => handleAddCart()}>
                        Add to Cart
                    </button>
                )}

                <button
                    className={isInWishlist ? "danger" : ""}
                    onClick={() => handleAddWish(isInWishlist ? true : false)}
                >
                    {" "}
                    <HiSparkles id="wishEdit"/>{" "}
                </button>
            </div>

            <p className="product-info">{description.split("|")[0]}</p>

            <h3> Specifications </h3>
            <ul>
                {description.includes("|") ? (
                    description
                        .split("|")
                        .slice(1)
                        .map((spec, index) => <li key={index}>{spec}</li>)
                ) : description.includes("and") ? (
                    description
                        .split("and")
                        .slice(1)
                        .map((spec, index) => <li key={index}>{spec}</li>)
                ) : (
                    <li key={1}>Cool Selection.</li>
                )}
            </ul>
        </div>
    );
}
