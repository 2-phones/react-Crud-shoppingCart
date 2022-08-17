import { Routes,Route } from "react-router-dom";
import Main from "./Main";
import {Header,Sidebar,} from "./nav";
import { Globalstyle } from "./style";
import Cart from "./cart";
import { useState } from "react";


function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <Globalstyle>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Sidebar/>
              <Main setCartItem={setCartItem}/>
             </>
          }/>
           <Route path="/cart" element={<Cart cartItem={cartItem}/> }/>
        </Routes>
      </Globalstyle>
    </>
  );
}

export default App;
