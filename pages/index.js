import Header from "../components/header";
import Hero from "../components/hero";
import Products from "../components/products";
import Categories from "../components/categories";

export default function Index() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Categories />
            <Products />
        </div>
    );
}
