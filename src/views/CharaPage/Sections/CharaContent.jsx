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

import Grid from "@material-ui/core/Grid";
import {charas} from "../chara";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import charaContentStyle from "assets/jss/material-kit-react/views/charPageSections/charaContentStyle.jsx";


class CharaContentSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>人物手帳</h2>
                        <h5 className={classes.description}>
                            キャラクターの紹介。
                        </h5>
                    </GridItem>
                </GridContainer>

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {charas.map(chara => (
                            <Grid item key={chara[0]} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={chara[2]}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {chara[0]}
                                        </Typography>
                                        <Typography>
                                            {chara[1]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        )
    }
}

CharaContentSection.propTypes = {
    classes: PropTypes.object
};

export default withStyles(charaContentStyle)(CharaContentSection);

