import { Provider } from "react-redux";
import { useStore } from "../store";
import "../utils/globals.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Nprogress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter();

    useEffect(() => {
        const load = () => {
            Nprogress.start();
            store.dispatch({
                type: 'CLOSE_NAV'
            })
        };
        const unload = () => {
            setTimeout(() => Nprogress.done(), 500);
        };

        router.events.on("routeChangeStart", load);
        router.events.on("routeChangeComplete", unload);
        router.events.on("routeChangeError", unload);

        return () => {
            router.events.off("routeChangeStart", load);
            router.events.off("routeChangeComplete", unload);
            router.events.off("routeChangeError", unload);
        };
    }, [router]);

    return (
        <Provider store={store}>
            <Head>
                <title> Amazon Unreal </title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta
                    name="keywords"
                    content="amazon, amazon clone, react clone"
                />
                <meta
                    name="description"
                    content="The better amazon built with Reactjs."
                />
                <meta name="author" content="Dash Skndash" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}
