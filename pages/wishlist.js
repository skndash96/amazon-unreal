import Header from "../components/header";
import Footer from "../components/footer";
import Wishlist from "../components/wishlist";
import { products } from "../fakedata";
import Products from "../components/products";

export default function WishlistPage() {
    return (
        <div className="container">
            <Header />

            <main>
                <Wishlist />
                <Products
                    title="You might like"
                    products={products().slice(0, 5)}
                />
            </main>

            <Footer />
        </div>
    );
}
