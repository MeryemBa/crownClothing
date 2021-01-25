import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory-selector";

import MenuItem from "../menu-item/menu-item-comp";

import { DirectoryMenuContainer } from "./directory.styles";

function Directory({ sections }) {
  return (
    <DirectoryMenuContainer>
     
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});
export default connect(mapStateToProps)(Directory);
