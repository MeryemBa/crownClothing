import React,{useEffect,lazy,Suspense} from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionAsync } from "../../redux/shop/shop-action";
import Spinner from "../../component/spinner/spinner-comp";
import ErrorPage from "../../component/404errorpage/404page-comp";
import { useLocation} from "react-router-dom";



function useQuery() {
  return new URLSearchParams(useLocation().search);
}



const CollectionContainer = lazy(()=>import("../collection/collection-container"));
const CollectionOverviewContainer= lazy(()=>import("../../component/collection-overview/collection-overview-container"));
const ProductDetailsContainer=lazy(()=>import("../../component/product-detail/product-details-container"));
 const SearchPageContainer=lazy(()=>import ("../../component/search-results/search-results-container"));





function Shop({ fetchCollectionAsync, match }) {
  let query = useQuery();
  useEffect(() => {
    fetchCollectionAsync();
  }, [fetchCollectionAsync]);

  return (
    <>
    <Suspense fallback={<Spinner/>}>
     <Switch>
      <Route
       exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
    
      <Route
        exact
        path={`${match.path}/search`}
        
      ><SearchPageContainer query={query.get("query")}/></Route>
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
       <Route
        exact
        path={`${match.path}/:collectionId/:itemId`}
        component={ProductDetailsContainer}
      />
     
     
    
        <Route component={ErrorPage}/>
       </Switch>
      </Suspense>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
