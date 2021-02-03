import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  toolBar: {
    textAlign: 'center',
  }
}));

const columnas = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 200 },
  { field: 'anio', headerName: 'Año', width: 100 },
  { field: 'horasSemana', headerName: 'Horas semana', width: 150 },
  { field: 'horasTotales', headerName: 'Horas totales', width: 150 },
];

function Asignaturas() {
  const classes = useStyles();
  const [asignaturas, setAsignaturas] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/asignaturas')
    .then((res) => {
      // console.log(res); // los datos vienen en la propiedad data
      console.log(res.data);

      // ponemos los registros en el state asignaturas
      setAsignaturas(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.toolBar}>
          <p>Aquí los filtros</p>
        </Grid>

        <Grid item xs={12}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid columns={columnas} rows={asignaturas} pageSize={10} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Asignaturas;