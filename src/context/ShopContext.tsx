import React from "react";
import { ShopContextType } from "../@types/shop.d";
// export const AuthContext = React.createContext<AuthContextType | null>(null);

export const ShopContext = React.createContext<ShopContextType | null>(null);

export default function ShopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // this will hold card items
  const hmm ={id:"1",title:"hmm"};
 ;
  return <ShopContext.Provider value={{cart:hmm}}>{children}</ShopContext.Provider>;
}
