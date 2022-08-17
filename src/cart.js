import { useState } from "react";
import { Header } from "./nav";
import { CartStyle } from "./style";
import useFetch from "./usefetch";


const Cart = ({cartItem}) => {
    return(
        <>
            <Header/>
            <Items cartItem={cartItem}/>
        </>
    )
}

const Items = ({cartItem}) => {
    const {items} = useFetch(`http://localhost:3333/CartItems`);
    const getpayment = () => {
        let total = 0;
        for(let i in items){
            total += Number(items[i].price)
        }
        return total;
    }
    const payment = getpayment(); // 토탈가격 함수로 구할수있다.
    const comma = /\B(?=(\d{3})+(?!\d))/g;
    const shipping = 3000;
    return(
        <CartStyle>
            <div className="container">
                <h2>장바구니</h2>
                <div className="item-box">
                    <ul className="header">
                        <li>번호</li>
                        <li>상품정보</li>
                        <li>수량</li>
                        <li>판매가</li>
                    </ul>
                        {items && items.map((li,key) => {
                            return(
                                <>
                                <div className="item-list">
                                    <p>{key + 1}</p>
                                    <img src={li.src}  width='10%'/>
                                    <p>{li.name}</p>
                                    <input type="number"/>
                                    <div>{li.price.toString().replace(comma,",")}</div>
                                </div>
                               
                            </>
                            )
                            
                        })}
                         <div className="orderInfo">
                                    <p>상품 금액 : {payment.toString().replace(comma,",")} ₩</p>
                                    <p>배송비 : {shipping.toString().replace(comma,",")} ₩</p>
                                    <p>총 결제 금액 : {(payment + shipping).toString().replace(comma,",")} ₩</p>
                                    <div className="order-buy">주문하기</div>
                        </div>
                </div>
            </div>
        </CartStyle> 
    )
}

export default Cart;