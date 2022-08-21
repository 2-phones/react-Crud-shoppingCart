import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{ 
        --color-black : black;
        --color-lightgrey : #bdbdbd;
        --font--Nunito : 'Nunito', sans-serif;
        }
        
`
const BodyStyle = styled.body`
    body{
        padding:0;
        margin:0;
    }
`
const Headerstyle = styled.div `

    .container {
        border: 1px solid var(--color-lightgrey);
        width: 100%;
        height: 100px;
        display: flex;
        align-items :center;
        justify-content : space-around;
        font-size : 20px;
        font-family: var(--font--Nunito);
    }
    .menu-box {
        list-style: none;
        display:flex;
        cursor: pointer;
        
    }
    li {
        padding : 55px;
    }
    .cart {
        cursor: pointer;
    }
    .chart-count {
        position:fixed;
        display: inline-block;
        top:20px;
        right:205px;
        width:30px;
        height:30px;
        background: brown;
        border-radius: 50%;
        font-weight: 700;
        font-size: 20px;
        color: white;
        text-align: center;
    }
    .icon{
        font-size:30px;
    }
`
const Sidebarstyle = styled.div`
    .container {
        left:0;
       border-right : 1px solid var(--color-lightgrey);
        width: 250px;
        height:100%;

    }
    .menu-box {
        list-style:none;
        padding:25px;
    }
    li {
        padding: 30px;
    }
`
const Mainstyle = styled.div`
   .main-container{
        display :flex;
   }
   .product-box{
    margin-left: 150px;
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
   }
   .product-list {
    margin:30px;
    width : 350px;
    height: 300px;
   }

`
const CartStyle = styled.div`
    :root{
        --color-black : black;
    }
    .cart-title {
    padding: 0;
    margin: 20px;
    text-align: center;
    font-size: 28px;
    }
    .item-container{
        display :flex;
        justify-content : space-around;
    }
    .header {
        display:flex;
        justify-content:space-between;
        list-style:none;
        border: 1px solid var(--color-lightgrey);
        margin: 0 ;
    }
    .item-list {
        display:flex;
        align-items:center;
        justify-content: space-between;
        width: 950px;
    }

    .header,.item-list {
        padding:15px;
    }

    .payment-Info{
        width : 250px;
        height: 350px;
        border: 1px solid var(--color-lightgrey);
        margin-top: 100px;
        
    }
    .payment-title {
        text-align : center;
        margin: 30px;
    }
    .payment-details {
        display:flex;
        justify-content: space-between;
        margin: 30px;

    }
    .order-buy{
        width : 80%;
        margin: 35px 15px;
        text-align :center;
        color : #ffffff;
        background-color : var(--color-black);
        font-size : 20px;
        border-radius : 20px;
        padding : 10px;
        cursor: pointer;
    }

    .blank-line {
        border: 1px solid var(--color-lightgrey);
        margin : 10px;
    
    }
    #quantity{
        width:20px;
    }


`

export { Headerstyle,Sidebarstyle,BodyStyle,Mainstyle,CartStyle,GlobalStyle };