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
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import hood from "assets/img/faces/hood.jpg";


class TeamSection extends React.Component {
    render() {
        const {classes} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>開発者</h2>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={hood} alt="..." className={imageClasses}/>
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    フード
                                    <br/>
                                    <small className={classes.smallTitle}>Director</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                        
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        href="https://twitter.com/hood_daze"
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"}/>
                                    </Button>
                                    <Button
                                        href="https://github.com/hood-daze"
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-github"}/>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>

                    </GridContainer>
                </div>
            </div>
        );
    }
}

TeamSection.propTypes = {
    classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
