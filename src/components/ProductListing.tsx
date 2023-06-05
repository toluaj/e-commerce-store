import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const productsResponse = await axios.get(
        "https://fakestoreapi.com/products"
      );
      dispatch(setProducts(productsResponse.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
