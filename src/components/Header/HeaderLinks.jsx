import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, CloudDownload} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
    const {classes} = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Series Site"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/story-one" className={classes.dropdownLink}>
                            1:シュガー・ソルトと世界のアルゴリズム
                        </Link>
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    title="キャラクター一覧"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Link to="/chara-page" className={classes.navLink}>
                        キャラクター
                    </Link>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    title="プロフィール"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Link to="profile-page" className={classes.navLink}>
                        プロフィール
                    </Link>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    title="音楽をたまに投稿します。"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://www.youtube.com/channel/UC_Qomla4jenwkVDvIKjw8Eg/featured?view_as=subscriber"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-youtube"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="twitterです。"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://twitter.com/hood_daze"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    title="githubです。"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://github.com/hood-daze"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-github"}/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
