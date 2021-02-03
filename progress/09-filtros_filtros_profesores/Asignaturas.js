import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  },
  select: {
    minWidth: 200,
  }
}));

const columnas = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 250 },
  { field: 'anio', headerName: 'Año', width: 100 },
  { field: 'horasSemana', headerName: 'Horas semana', width: 150 },
  { field: 'horasTotales', headerName: 'Horas totales', width: 150 },
  {
    field: 'profesor',
    headerName: 'Profesor',
    width: 280,
    valueGetter: ({ row: { Profesor } }) => Profesor ? `${Profesor.nombre} ${Profesor.apellidos}` : 'Sin profesor',
  },
];

function Asignaturas() {
  const classes = useStyles();
  const [asignaturas, setAsignaturas] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [filtros, setFiltros] = useState({ profesorId: 'todos' });

  const handleFilter = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/profesores')
    .then((res) => {
      console.log(res.data);
      setProfesores(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []); // que se ejecute solo al inicio
  
  useEffect(() => {
    axios.get('http://localhost:5000/asignaturas')
    .then((res) => {
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl className={classes.select}>
                <InputLabel id="select-profesor">Profesor</InputLabel>
                <Select
                  labelId="select-profesor"
                  name="profesorId"
                  value={filtros.profesorId || ''}
                  onChange={handleFilter}
                >
                  <MenuItem value="todos">Todos los profesores</MenuItem>
                  {profesores.map((profesor) => (
                    <MenuItem key={profesor.id} value={profesor.id}>{`${profesor.nombre} ${profesor.apellidos}`}</MenuItem>
                  ))}
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              Buscar
            </Grid>
          </Grid>
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