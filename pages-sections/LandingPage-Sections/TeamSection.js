import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/maria.jpg";
import team2 from "assets/img/faces/aiden.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div style={{color:'white',backgroundColor:'#26253d',marginTop:50}} className='team-container'  className={classes.section}>
      <h2 style={{color:'#9a7801'}} className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer style={{}}>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 style={{color:'white'}} className={classes.cardTitle}>
                Maria Kylie Stone
                <br />
                <small style={{color:'white'}} className={classes.smallTitle}>Marketing Manager</small>
              </h4>
              <CardBody>
               
              </CardBody>
             
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 style={{color:'white'}}className={classes.cardTitle}>
                Aiden Sambel
                <br />
                <small style={{color:'white'}} className={classes.smallTitle}>Business Development Representative</small>
              </h4>
              <CardBody>
                
              </CardBody>
             
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 style={{color:'white'}} className={classes.cardTitle}>
                   Rachael Fletcher
                <br />
                <small style={{color:'white'}} className={classes.smallTitle}>Financial Analyst</small>
              </h4>
              <CardBody>
                
              </CardBody>
              
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
