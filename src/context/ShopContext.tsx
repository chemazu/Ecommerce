import React, { useState } from "react";
import { ShopContextType } from "../@types/shop.d";
// export const AuthContext = React.createContext<AuthContextType | null>(null);

export const ShopContext = React.createContext<ShopContextType | null>(null);

export default function ShopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("token") || "false")
  );

  const [productData, setProductData] = useState([]);
  // const cart = [
  //   { id: "1", title: "hmm", price: "100" },
  //   { id: "2", title: "hmm2",price: "200" },
  // ];

  const value = {
    cart,
    setCart,
    productData,
    setProductData,
    isAuth,
    setIsAuth,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
