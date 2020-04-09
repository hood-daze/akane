import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import hood from "assets/img/faces/hood.jpg";
import greetingStyle from "../../../assets/jss/material-kit-react/views/storyPageSections/greetingStyle";

class GreetingSection extends React.Component {
    render() {
        const {classes} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );

        return (
            <div className={classes.section}>
                <h2 className={classes.title}>あいさつ</h2>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.profile}>
                            <img src={hood} alt="..." className={imageClasses} />
                            <div className={classes.name}>
                                <h3 className={classes.title}>フード</h3>
                                <h6>Director</h6>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
                <div className={classes.description}>
                    <p>
                        このさく少なくとも
                    </p>
                </div>
            </div>
        );
    }
}

GreetingSection.propTypes = {
    classes: PropTypes.object
};

export default withStyles(greetingStyle)(GreetingSection);
