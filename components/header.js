import styles from "./header.module.scss";
import { FaAmazon, FaSearch } from "react-icons/fa";
import {
    RiShoppingCartLine,
    RiMenuUnfoldFill as RiMenuFoldFill,
    RiMenuFoldFill as RiMenuUnfoldFill,
} from "react-icons/ri";
import {
    HiSparkles
} from "react-icons/hi"
import Link from "next/link";
import { categories } from "../fakedata";
import Navigation from "./navigation";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const openNav = () => {
        dispatch({
            type: "OPEN_NAV",
        });
    };

    return (
        <>
            <div className={"container " + styles.header}>
                <div className="header-inputs">
                    <button onClick={openNav}>
                        <RiMenuFoldFill />
                    </button>

                    <Link href="/">
                        <button>
                            <FaAmazon />
                        </button>
                    </Link>

                    <div className="header-search">
                        <input type="text" placeholder="Anything from A to Z" />
                        <div>
                            <FaSearch />
                        </div>
                    </div>

                    <div>
                        <Link href="/wishlist">
                            <button>
                                <HiSparkles />
                            </button>
                        </Link>
                        <Link href="/cart">
                            <button>
                                <RiShoppingCartLine />
                                {cart.length > 0 && (
                                    <span className="cart"> {cart.length} </span>
                                )}
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="header-categories">
                    <ul className="no-scrollbar">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link
                                    href={
                                        "/" +
                                        category
                                            .toLowerCase()
                                            .split(/ +/)
                                            .join("-")
                                    }
                                >
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Navigation />
        </>
    );
}
