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
import {makeStyles} from "@material-ui/core";
import charaPageStyle from "../../assets/jss/material-kit-react/views/charaPage";


import CharaContentSection from "./Sections/CharaContent";



class CharaPage extends React.Component {

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
                <Parallax small filter image={require("assets/img/chara-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <CharaContentSection/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

CharaPage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(charaPageStyle)(CharaPage);
