import WithSpinner from "../../component/with-spinner/with-spinner-comp";
import ProductDetail from "./product-detail-comp";
import { selectIsLoding } from "../../redux/shop/shop-selector";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsLoding(state),
});
const ProductDetailsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductDetail);
export default ProductDetailsContainer;