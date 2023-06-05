import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Product,
  removeSelectedProducts,
  selectedProducts,
} from "../redux/actions/productActions";
import { IRootState } from "../redux/reducers";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector(
    (state: IRootState) => state.selectedProduct
  ) as Product;
  const { image, category, price, title, description } = product;
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const productResponse = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProducts(productResponse.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") getProduct();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="ui grid container" style={{ marginTop: 20 }}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <h4 className="ui teal tag label">${price}</h4>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
