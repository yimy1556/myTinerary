import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    root: {
		maxWidth: '100%',
  	}
});

export default function ImgCard(prop) {
  	const classes = useStyles();

  	return (
    	<Card className={classes.root}>
    	  	<CardActionArea>
    	  	  	<CardMedia
    	  	  	  	component="img"
    	  	  	  	alt="Contemplative Reptile"
                    height='150em'
    	  	  	  	image= {prop.dato.urlCity}
					title="Contemplative Reptile"
    	  	  	/>
    	  	  	<CardContent className='fondoCity' style={{padding:'0em'}}>
                    {prop.dato.nameCity}
    	  	  	</CardContent>
    	  	</CardActionArea>
    	</Card>
  	);
}
