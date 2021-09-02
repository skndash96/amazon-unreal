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
import Link from "next/link";

export default function Navigation() {
    const dispatch = useDispatch();
    const { navIsOpen } = useSelector((state) => state);

    const closeNav = () => {
        dispatch({
            type: "CLOSE_NAV",
        });
    };

    return (
        <div
            id="navigation"
            className={`container ${styles.navigation} ${
                navIsOpen ? styles.active : ""
            }`}
        >
            <button className="ripple" onClick={closeNav}>
                <RiMenuUnfoldFill />
            </button>

            <ul>
                <li>
                    {" "}
                    <FaAmazon /> Amazon{" "}
                </li>
                <li>
                    {" "}
                    <RiCart /> Cart{" "}
                </li>
                <li>
                    {" "}
                    <HiSparkles /> Wish{" "}
                </li>
                <li>
                    {" "}
                    <FaUser /> Author{" "}
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
    );
}
