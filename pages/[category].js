import { useRouter } from "next/router";
import Products from "../components/products";
import { useEffect } from "react";
import Error from "next/error";
import { products, categories } from "../fakedata";
import Header from "../components/header";

function Category({ category }) {
    if (!categories.includes(category)) {
        return <Error statusCode={404} />;
    }

    return (
        <div className="container">
            <Header />
            <Products title={category} products={products().slice(9)} />
        </div>
    );
}

Category.getInitialProps = function ({ query }) {
    return {
        category: query.category,
    };
};

export default Category;
