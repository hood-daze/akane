import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";


class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>あいさつ</h2>
            <h5 className={classes.description}>
              本ホームページを茜色記憶投影と名づけました。<br/>
              ぼくにとって物語を作ることは多重の意味があり、その一つに記憶の投影があります。<br/>
              その記憶は、淡く、霞んだ茜色をしています。<br/>
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
