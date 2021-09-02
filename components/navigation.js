import styles from './navigation.module.scss'
import {
    FaAmazon,
    FaUserAstronaut as FaUser,
    FaWarehouse as FaHouse,
    FaNetworkWired as FaTech,
    FaBook,
    FaShoppingBag as FaShop
} from "react-icons/fa"
import {
    HiSparkles,
    HiPencil
} from "react-icons/hi"
import {
    SiWire
} from 'react-icons/si'
import {
    RiShoppingCartLine as RiCart,
    RiMenuFoldFill as RiMenuUnfoldFill
} from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'

export default function Navigation () {
    const dispatch = useDispatch()
    const { navIsOpen } = useSelector(state => state)
    
    const closeNav = () => {
        dispatch({
            type: 'CLOSE_NAV'
        })
    }
    
    return (
        <div id="navigation" className={`container ${styles.navigation} ${navIsOpen ? styles.active : ''}`}>
            <button className="ripple" onClick={closeNav}>
                <RiMenuUnfoldFill />
            </button>
            
            <ul>
                <li> <FaAmazon /> Amazon </li>
                <li> <RiCart /> Cart </li>
                <li> <HiSparkles /> Wish </li>
                <li> <FaUser /> Author </li>
                <li className="depts">
                    <h3> Departments </h3>
                    <ul>
                        <li> <FaHouse /> <span> Household </span> </li>
                        <li> <FaTech /> <span> Electronics </span> </li>
                        <li> <FaShop /> <span> Groceries </span> </li>
                        <li> <SiWire /> <span> Accessories </span> </li>
                        <li> <FaBook /> <span> Books </span> </li>
                        <li> <HiPencil /> <span> Stationary </span> </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}