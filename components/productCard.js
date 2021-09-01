import styles from "./productCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ImStarHalf, ImStarFull } from "react-icons/im";

export default function Product({
    title,
    category,
    description,
    image,
    rating,
    price,
    id,
    isPrior
}) {
    return (<Link href={`/product/${id}`}>
        <div className={styles.product}>
            <div className="product-pic">
                <Image
                    priority={isPrior}
                    objectFit="contain"
                    layout="fill"
                    src={image}
                    alt={title}
                />
            </div>

            <div className="product-text">
                <h4>{title.split(/ +/).slice(0, 7).join(" ") + ".."}</h4>
                <p>{description.split(/ +/).slice(0, 10).join(" ") + "..."}</p>
            </div>
            
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
    </Link>);
}
