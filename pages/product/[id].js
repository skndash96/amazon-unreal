import ProductInfo from "../../components/productInfo";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Error from "next/error";
import { products } from "../../fakedata";
import { useEffect, useState } from "react";

export default function ProductPage({ id }) {
    const [state, setState] = useState({
        data: {
            loading: true,
        },
    });

    useEffect(() => {
        const data = products(id);

        setTimeout(() => {
            if (!data)
                setState({
                    error: true,
                });
            else
                setState({
                    data,
                });
        }, 1000);
    }, []);

    if (state.error) return <Error statusCode={404} />;

    return (
        <div className="container">
            <Header />
            {state.data.loading ? (
                <div className="loading">...</div>
            ) : (
                <ProductInfo {...state.data} />
            )}
            <Footer />
        </div>
    );
}

export function getServerSideProps({ params }) {
    return {
        props: {
            id: params.id,
        },
    };
}
