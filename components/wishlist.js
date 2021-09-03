import Products from "./products";
import { products } from "../fakedata";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Wishlist() {
    const { wishlist } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(wishlist.slice().map((id) => products(id)));
    }, [wishlist.length]);

    return (
        <div className="container">
            {!data ? (
                <div className={!data ? "loading" : ""}>...</div>
            ) : (
                <>
                    <Products
                        title="Your wishlist"
                        products={data}
                        isWishlist={true}
                    />
                    <Products
                        title="You might like"
                        products={products().slice(0, 5)}
                    />
                </>
            )}
        </div>
    );
}
