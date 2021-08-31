import styles from "./product.module.scss";
import Image from "next/image";
import { ImStarHalf, ImStarFull } from "react-icons/im";

export default function Product({
    title,
    category,
    description,
    image,
    rating,
    price,
}) {
    return (
        <div className={styles.product}>
            <div className="product-pic">
                <Image
                    objectFit="contain"
                    layout="fill"
                    src={image}
                    alt={title}
                />
            </div>

            <h4>{title.split(/ +/).slice(0, 7).join(" ") + ".."}</h4>

            <p>{description.split(/ +/).slice(0, 10).join(" ") + "..."}</p>

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
