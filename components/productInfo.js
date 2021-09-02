import styles from './productInfo.module.scss'
import Image from 'next/image'
import { ImStarHalf, ImStarFull } from "react-icons/im";

export default function ProductInfo({
    title,
    description,
    rating,
    image,
    category,
    price
}) {
    return (
        <div className={"container " + styles.page}>
            <div className="product-pic">
                <Image
                    objectFit="contain"
                    layout="fill"
                    src={image}
                />
            </div>
            
            <div className="product-title">
                <h2>
                    {title}
                </h2>
                <h3>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
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
            
            <p className="product-info">
                {description.split('|')[0]}
            </p>
            
            <h3> Specifications </h3>
            <ul>
                {description.includes('|')
                ? description.split('|').slice(1).map((spec, index) => (
                    <li key={index}>
                        {spec}
                    </li>
                ))
                : description.includes('and')
                ? description.split('and').slice(1).map((spec, index) => (
                    <li key={index}>
                        {spec}
                    </li>
                ))
                : <li key={1}>
                        Cool Selection.
                </li>
                }
            </ul>
        </div>
    )
}