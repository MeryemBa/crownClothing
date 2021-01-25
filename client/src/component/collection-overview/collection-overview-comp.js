import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop-selector";

import CollectionPreview from "../../component/collection-preview/collection-preview-comp";
import { CollectionOverviewContainer } from "./collection-overview.styles";
function CollectionOverview({ collection }) {
  return (
    <CollectionOverviewContainer>
      {collection.map(({ id, ...item }) => (
        <CollectionPreview key={id} {...item} />
      ))}
    </CollectionOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  collection: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
