import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/hood.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand="TOP"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div>
                      <h3 className={classes.title}>フード</h3>
                      <h6>Director</h6>
                      <Button href="https://twitter.com/hood_daze"　justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button href="https://github.com/hood-daze" justIcon link className={classes.margin5}>
                        <i className={"fab fa-github"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  小説を書いています。                
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      // {
                      //   tabButton: "Paint",
                      //   tabIcon: Palette,
                      //   tabContent: (
                      //       <div className={classes.description}>
                      //           <p>
                      //               絵でものせます。
                      //           </p>
                      //       </div>
                      //   )
                      // },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                            <div className={classes.description}>
                                <p>
                                    野菜。
                                </p>
                            </div>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
