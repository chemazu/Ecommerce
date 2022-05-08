import React,{useState} from "react";
import { ShopContextType } from "../@types/shop.d";
// export const AuthContext = React.createContext<AuthContextType | null>(null);

export const ShopContext = React.createContext<ShopContextType | null>(null);

export default function ShopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(localStorage.getItem("cart"));
 
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")||"[]"));
  const [productData, setProductData] = useState([]);
  // const cart = [
  //   { id: "1", title: "hmm", price: "100" },
  //   { id: "2", title: "hmm2",price: "200" },
  // ];

  const value = { cart,setCart,productData,setProductData };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
