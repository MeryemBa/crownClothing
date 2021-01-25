import WithSpinner from "../../component/with-spinner/with-spinner-comp";
import Collection from "./collection-comp";
import { selectIsLoding } from "../../redux/shop/shop-selector";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsLoding(state),
});
const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);
export default CollectionContainer;
