import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
