import WithSpinner from "../../component/with-spinner/with-spinner-comp";
import CollectionOverview from "./collection-overview-comp";
import { selectIsFetching } from "../../redux/shop/shop-selector";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
