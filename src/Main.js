import { useEffect, useState } from "react"
import { Mainstyle } from "./style"
import  useFetch  from "./usefetch"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Sidebar } from "./nav"

const Main = ({setCartItem}) => {
    return(
        <Mainstyle>
                
                <List setCartItem={setCartItem}/>
        </Mainstyle>
    )
}


const List = ({setCartItem}) => {
    const {items} = useFetch('http://localhost:3333/Items','get');
    const navigate = useNavigate();
   
    const addCart = (li) => {
        const {id, title, name, price, src} = li;
        setCartItem(li);
        axios('http://localhost:3333/CartItems',{
            method:"post",
            data:li
        })
    }

    return(
        <div className="main-container">
            <Sidebar/>
            <div className="product-box">
                {items && items.map( li => { 
                    return(
                        <div className="product-list" key={li.id}>
                            <img src={li.src} width='60%' />
                            <p>{li.name}</p>
                            <p>{ li.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } ₩</p>
                            <button onClick={() => addCart(li)}>장바구니</button>
                        </div>
                    )   
                })}
            </div>
        </div>
    )
}

export default Main