import { ActionTypes } from "../constants/actionTypes";

export type Product = {
  id: 1;
  title: string;
  category: "Accessories" | "Groceries" | "Gadgets";
  image: string;
  price: number;
  description?: string;
};

export const setProducts = (products: Product[]) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products: Product[]) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
