import { Headerstyle,Sidebarstyle } from "./style"
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate()

    return(
        <Headerstyle>
            <div className="container">
                <ul className="menu-box">
                    <li onClick={ () => navigate('/')} >Home</li>
                    <li>Shop</li>
                    <li>Style</li>
                    <li>About</li>
                    <li></li>
                </ul>
                <div className="cart" onClick={ () => navigate('/cart')}>
                    <FaShoppingBag/>
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