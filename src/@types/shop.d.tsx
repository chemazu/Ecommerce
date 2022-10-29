export type CartItem = {
  cardtype: string;
  category: string;
  img1: string;
  img2: string;
  name: string;
  price: number;
  property: string;
  quantity: number;
  year: number;
};
export type ShopContextType = {
  cart: CartItem[];
  setCart: any;
  productData: any;
  setProductData: any;
  isAuth: any;
  setIsAuth: any;
};
