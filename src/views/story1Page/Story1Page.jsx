import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import charaPageStyle from "../../assets/jss/material-kit-react/views/charaPage";
import ProductSection from "./Sections/ProductSection";
import GreetingSection from "./Sections/GreetingSection";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "@material-ui/core/Button";

class Story1Page extends React.Component {

    render() {
        const {classes, ...rest} = this.props;
        return (
            <div>
                <Header
                    color="transparent"
                    brand="TOP"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/story1-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <ProductSection />
                        {/* <GreetingSection /> */}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

Story1Page.propTypes = {
    classes: PropTypes.object
};

export default withStyles(charaPageStyle)(Story1Page);
