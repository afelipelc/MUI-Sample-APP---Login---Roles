import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

export default function CarCard({ datos, id, onDelete }) {
  const classes = useStyles();

  const [auto, setAuto] = useState(datos);
  const [editar, setEditar] = useState(false);

  const toogleEditar = () => {
    // altenar editar
    setEditar(!editar);
  };

  const handleChange = (e) => {
    // actualizar el state
    setAuto({
      ...auto, // tomar lo que tiene auto
      [e.target.name] : e.target.value, // actualizar la propiedad del auto (nombre del textField)
    });
  };

  const handleSave = () => {
    // se deben enviar los cambios al componente padre

    // deshabilitar editar
    setEditar(false);
  }

  const handleDelete = () => {

    if (onDelete) { // si recibió la función para eliminar, invocarla
      onDelete(id);
    }
  };

  useEffect(() => {
    setAuto({ ...datos });
  }, [datos, id])

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {!editar && (
          <>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Auto
            </Typography>
            <Typography variant="h5" component="h2">
              {auto.nombre}
            </Typography>
          </>
        )}

        {editar && (
          <TextField
            label="Nombre"
            name="nombre"
            value={auto.nombre}
            onChange={handleChange}
          />
        )}
        <Typography className={classes.pos} color="textSecondary">
          Marca
        </Typography>

        {!editar && (
          <Typography variant="h6" component="p">
            {auto.marca}
          </Typography>
        )}
        {editar && (
            <TextField
              label="Marca"
              name="marca"
              value={auto.marca}
              onChange={handleChange}
            />
          )}
      </CardContent>
      <CardActions>
        {!editar && (
          <IconButton color="primary" aria-label="Editar" onClick={toogleEditar}>
            <Icon size="small">edit</Icon>
          </IconButton>
        )}

        {editar && (
          <IconButton color="primary" aria-label="Guardar" onClick={handleSave}>
            <Icon size="small">save</Icon>
          </IconButton>
        )}
        <IconButton color="secondary" aria-label="Eliminar" className={classes.marginLeftAuto} onClick={handleDelete}>
          <Icon size="small">delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};
