import { Routes,Route } from "react-router-dom";
import Main from "./Main";
import {Header,Sidebar,} from "./nav";
import { GlobalStyle,BodyStyle } from "./style";
import Cart from "./cart";
import { useState } from "react";


function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
    <GlobalStyle/>
      <BodyStyle>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Main setCartItem={setCartItem}/>
             </>
          }/>
           <Route path="/cart" element={<Cart cartItem={cartItem}/> }/>
        </Routes>
      </BodyStyle>
    </>
  );
}

export default App;
