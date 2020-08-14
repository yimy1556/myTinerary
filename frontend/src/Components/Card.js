import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: '25vw',
  }
});

export default function ImgCard(prop) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image= {prop.dato.img}
          title="Contemplative Reptile"
        />
        <CardContent
        >
          <Typography
            gutterBottom
            variant="p"
            component="p"
            style={{ textAlign: "center" }}
          >
            {prop.dato.nameImg}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
