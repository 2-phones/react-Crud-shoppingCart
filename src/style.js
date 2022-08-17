import styled from "styled-components";

const Globalstyle = styled.body`
    body{
        padding:0;
        margin:0;
    }
`

const Headerstyle = styled.div `

    .container {
        border: 1px solid black;
        width: 100%;
        height: 100px;
        display: flex;
        align-items :center;
        justify-content : space-around;
    }
    .menu-box {
        list-style: none;
        display:flex;
        
    }
    li {
        padding : 55px;
    }
    .cart {
        cursor: pointer;
    }
`
const Sidebarstyle = styled.div`
    .container {
        position:fixed;
        left:0;
        border: 1px solid black;
        width: 150px;
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
   .container{
    
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
    h2 {
       margin-left : 700px;
       padding: 40px;
    }
    .item-box {
        display:flex;
        justify-content:center;
        flex-wrap: wrap;
    }
    .header {
        display:flex;
        justify-content:space-between;
        list-style:none;
        border: 1px solid black;
        width: 60%;
        
    }
    .item-list {
        display:flex;
        justify-content:space-around;
        width: 60%;
        align-items:center;
        width: 60%;
        
    }

    .header,.item-list {
        padding:15px;
        margin-right: 105px;
    }

    .orderInfo {
        position: fixed;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        right: 0;
        width : 250px;
        height: 350px;
        border: 1px solid black;
        margin-right: 20px;
        padding: 20px;
    }


`

export { Headerstyle,Sidebarstyle,Globalstyle,Mainstyle,CartStyle };