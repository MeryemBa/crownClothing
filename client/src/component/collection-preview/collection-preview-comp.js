import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../../component/collection-item/collection-item-comp";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  CollectionPreviewTitle,
} from "./collection-preview.styles";

function CollectionPreview({ title, items, routeName, history, match }) {

  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, index) => index <= 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} routeName={routeName}/>
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
export default withRouter(CollectionPreview);
