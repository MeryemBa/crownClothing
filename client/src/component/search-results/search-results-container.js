import WithSpinner from "../with-spinner/with-spinner-comp";
import SearchPage from "./search-results-comp";
import { selectIsLoding } from "../../redux/shop/shop-selector";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsLoding(state),
});
const SearchPageContainer = compose(
  withRouter,
  connect(mapStateToProps),
  WithSpinner,
)(SearchPage);
export default SearchPageContainer;