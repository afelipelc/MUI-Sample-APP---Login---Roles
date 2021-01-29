import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
    marginBottom: 0,
  },
  marginLeftAuto: {
    marginLeft: 'auto !important',
  },
});

export default function CarCard({ datos }) {
  const classes = useStyles();
  console.log(datos);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Auto
        </Typography>
        <Typography variant="h5" component="h2">
          {datos.nombre}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Marca
        </Typography>
        <Typography variant="h6" component="p">
          {datos.marca}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="primary" aria-label="Editar">
          <Icon size="small">edit</Icon>
        </IconButton>
        <IconButton color="primary" aria-label="Guardar">
          <Icon size="small">save</Icon>
        </IconButton>
        <IconButton color="secondary" aria-label="Eliminar" className={classes.marginLeftAuto}>
          <Icon size="small">delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};
