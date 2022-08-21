import { useState } from "react";
import { Header } from "./nav";
import { CartStyle } from "./style";
import useFetch from "./usefetch";


const Cart = () => {
    const getpayment = () => {
        let total = 0;
        for(let i in items){
            total += Number(items[i].price)
        }
        return total;
    }
    const {items} = useFetch(`http://localhost:3333/CartItems`);
    const payment = getpayment(); // 토탈가격 함수로 구할수있다.
    const comma = /\B(?=(\d{3})+(?!\d))/g;
    const shipping = 3000;


    return(
        <>
            <Header />
            <CartItems />
            
        </>
    )
}

const CartItems = () => {
    const getpayment = () => {
        let total = 0;
        for(let i in items){
            total += Number(items[i].price)
        }
        return total;
    }
    const {items} = useFetch(`http://localhost:3333/CartItems`);
    const payment = getpayment(); // 토탈가격 함수로 구할수있다.
    const comma = /\B(?=(\d{3})+(?!\d))/g;
    const shipping = 3000;

    return(
        <CartStyle>
                <div className="item-container">
                    <div className="item-box">
                    <h2 className="cart-title">장바구니</h2>
                        <ul className="header">
                            <li>번호</li>
                            <li>상품정보</li>
                            <li>수량</li>
                            <li>판매가</li>
                        </ul>
                            {items && items.map((li,key) => {
                                return(
                                    <div className="item-list">
                                        <p>{key + 1}</p>
                                        <img src={li.src}  width='10%'/>
                                        <p>{li.name}</p>
                                        <input type="text" id="quantity"  value='1' />
                                        <div>{li.price.toString().replace(comma,",")}</div>
                                    </div>
                                ) 
                                })}
                        </div>
                    <Paymentinfor payment={payment} comma={comma} shipping={shipping} />
                </div>
        </CartStyle> 
    )
}

const Paymentinfor = ({payment, comma, shipping}) => {
    return(
        <CartStyle>
            <div className="payment-Info">
                    <h3 className="payment-title"> 결제 정보</h3>
                <div className="payment-details">
                    <p>상품 금액 :</p>
                    <p>{payment.toString().replace(comma,",")} ₩</p>
                </div>
                <div className="payment-details">
                    <p>배송비 :</p>
                    <p>{shipping.toString().replace(comma,",")} ₩</p>
                </div>
                <div className="payment-details">
                    <p>총 결제 금액 : </p>
                    <p>{(payment + shipping).toString().replace(comma,",")} ₩</p>
                </div>
                <div className="blank-line"></div>
                <div className="order-buy">
                    주문하기
                </div>
            </div>
        </CartStyle>
    )
}

export default Cart;