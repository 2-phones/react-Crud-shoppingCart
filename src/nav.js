import { Headerstyle,Sidebarstyle } from "./style"
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Header = ({items}) =>{
    const navigate = useNavigate()
    const [cartItems , setCartItems] = useState('');
    useEffect( () => {
        fetch('http://localhost:3333/CartItems').then(res => res.json()).then(data => setCartItems(data))
    },[])
    return(
        <Headerstyle>
            <div className="container">
                <ul className="menu-box">
                    <li onClick={ () => navigate('/')} >Home</li>
                    <li>Shop</li>
                    <li>Style</li>
                    <li>About</li>
                </ul>
                <div className="cart" onClick={ () => navigate('/cart')}>
                    <div className="icon"><FaShoppingBag/></div>
                    <span className="chart-count">{cartItems.length}</span>
                </div>
            </div>
        </Headerstyle>
    )
}

const Sidebar = () => {
    return(
        <Sidebarstyle>
            <div className="container">
                <ul className="menu-box">
                    <li>Best</li>
                    <li>Top</li>
                    <li>Pants</li>
                    <li>Shoes</li>
                    <li>Bag</li>
                    <li>Outer</li>
                </ul>
            </div>
        </Sidebarstyle>
    )
}

export {Header,Sidebar,}