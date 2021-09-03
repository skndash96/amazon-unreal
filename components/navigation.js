import styles from "./navigation.module.scss";
import {
    FaAmazon,
    FaUserAstronaut as FaUser,
    FaWarehouse as FaHouse,
    FaNetworkWired as FaTech,
    FaBook,
    FaShoppingBag as FaShop,
} from "react-icons/fa";
import { HiSparkles, HiPencil } from "react-icons/hi";
import { SiWire } from "react-icons/si";
import {
    RiShoppingCartLine as RiCart,
    RiMenuFoldFill as RiMenuUnfoldFill,
} from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from 'react'
import Link from "next/link";

export default function Navigation() {
    const dispatch = useDispatch();
    const { navIsOpen } = useSelector((state) => state);

    const menuRef = useRef()
    
    const handleClick = (event) => {
        if (event.clientX > menuRef.current.clientWidth) {
            event.stopPropagation()
            closeNav()
        }
    }
    
    const closeNav = () => {
        dispatch({
            type: "CLOSE_NAV",
        });
    };

    return (
        <div onClick={handleClick} className={`container ${styles.navigation} ${navIsOpen ? styles.active : ""}`}>
        <div ref={menuRef} className="menu">
            <button className="ripple" onClick={closeNav}>
                <RiMenuUnfoldFill />
            </button>

            <ul>
                <li>
                    <Link href="/">
                        <div>
                            <FaAmazon /> Amazon
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <div>
                            <RiCart /> Cart
                        </div>
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link href="/wishlist">
                        <div>
                            <HiSparkles /> Wish
                        </div>
                    </Link>
                </li>
                <li>
                    <div>
                        <a target="_blank" href="https://github.com/skndash96/amazon-unreal">
                            <FaUser /> Author
                        </a>
                    </div>
                </li>
                <li className="depts">
                    <h3> Departments </h3>
                    <ul>
                        <li>
                            {" "}
                            <FaHouse />{" "}
                            <Link href="/households"> Household </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <FaTech />{" "}
                            <Link href="/electronics"> Electronics </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <FaShop />{" "}
                            <Link href="/groceries"> Groceries </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <SiWire />{" "}
                            <Link href="/accessories"> Accessories </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <FaBook /> <Link href="/books"> Books </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <HiPencil />{" "}
                            <Link href="/stationaries"> Stationary </Link>{" "}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        </div>
    );
}
