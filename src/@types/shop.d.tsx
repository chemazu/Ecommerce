export type CartItem = {
  id: string;
  name: string;
};
export type ShopContextType = {
  cart:CartItem[];
  setCart:any
};
