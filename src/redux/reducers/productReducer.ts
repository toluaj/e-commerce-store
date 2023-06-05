import { Product } from "../actions/productActions";
import { ActionTypes } from "../constants/actionTypes";

type Action = {
  type: string;
  payload: Product[];
};
const initialState = {
  products: [{ id: 0, title: "", category: "", image: "", price: 0 }],
};

export const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

export const selectedProductReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return { ...state };
  }
};
