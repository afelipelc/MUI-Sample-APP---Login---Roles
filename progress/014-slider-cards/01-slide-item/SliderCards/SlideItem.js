import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating'; // instalar npm install @material-ui/lab

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    minWidth: 200,
    minHeight: 275,
    margin: '8px 0',
  },
  title: {
    color: "#094069",
    fontSize: 15,
  },
  footer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: "space-between",
  }
});

export default function SlideItem({ titulo, precio, imagen, descripcion, rating}) {
  const classes = useStyles();
  // <Link to="/URL" component={CardActionArea}>
  // </Link>

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={titulo}
          height="120"
          image={imagen}
          title={titulo}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="subtitle2" component="h6">
            {titulo.length > 25 ? titulo.substring(0,25).padEnd(28, '...') : titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion.length > 50 ? descripcion.substring(0,50).padEnd(53, '...') : descripcion}
          </Typography>
          <div className={classes.footer}>
            <Typography variant="subtitle2" color="textPrimary" component="p">
              {`$${parseFloat(precio || 0).toFixed(2)}`}
            </Typography>
            <Rating size="small" value={rating || 0} precision={0.2} readOnly />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}