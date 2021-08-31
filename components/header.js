import styles from "./header.module.scss";
import { FaAmazon, FaSearch } from "react-icons/fa";
import {
    RiShoppingCartLine,
    RiMenuUnfoldFill as RiMenuFoldFill,
    RiMenuFoldFill as RiMenuUnfoldFill,
} from "react-icons/ri";
import Link from "next/link";

export default function Header() {
    return (
        <div className={"container " + styles.header}>
            <div className="header-inputs">
                <div>
                    <button>
                        <RiMenuFoldFill />
                    </button>
                    <Link href="/" passHref={false}>
                        <FaAmazon />
                    </Link>
                </div>

                <div className="nav-search">
                    <input type="text" placeholder="Anything from A to Z" />
                    <div>
                        <FaSearch />
                    </div>
                </div>

                <div>
                    <button>
                        <RiShoppingCartLine />
                    </button>
                </div>
            </div>

            <div className="nav-categories">
                <ul className="no-scrollbar">
                    <li> Best Sellers </li>
                    <li> New Products </li>
                    <li> Electronics </li>
                    <li> Groceries </li>
                    <li> Music </li>
                    <li> Prime </li>
                </ul>
            </div>
        </div>
    );
}
