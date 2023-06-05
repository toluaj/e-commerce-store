import { useSelector } from "react-redux";
import { IRootState } from "../redux/reducers";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector(
    (state: IRootState) => state.allProducts.products
  );

  return (
    <>
      {products.map((product) => {
        const { id, category, title, image, price } = product;
        return (
          <div style={{ marginTop: 20 }} key={id}>
            <div className="four column wide">
              <Link to={`/product/${id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">$ {price}</div>
                      <div className="meta">{category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
