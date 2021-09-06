import Cart from "../components/cart";
import Products from "../components/products";
import Header from "../components/header";
import Footer from "../components/footer";
import { products } from "../fakedata";
import Popup from "../components/popup";

export default function CartPage() {
    return (
        <div className="container">
            <Header />

            <Popup />
            
            <main>
                <Cart />
                <Products
                    products={products().slice(0, 5)}
                    title="You might like"
                />
            </main>

            <Footer />
        </div>
    );
}
