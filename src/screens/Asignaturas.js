import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  const [filtros, setFiltros] = useState({});
  const [buscar, setBuscar] = useState('');

  const handleFilter = (e) => {
    // si el valor seleccionado es 'todos' 
    if (e.target.value === 'todos') {
      // quitar el filtro
      delete filtros[e.target.name];
      setFiltros({
        ...filtros,
      });
    } else {
      setFiltros({
        ...filtros,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleChangeBuscar = (e) => {
    setBuscar( e.target.value);
  };

  // cuando se presione enter
  const handleOnBuscar = (e) => {
    if(e.key === 'Enter'){
      // console.log('Presionó enter! ')
      // realizar búsqueda
      axios.get(`http://localhost:5000/asignaturas?q=${buscar}`)
      .then((res) => {
        console.log(res);
        setAsignaturas([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/profesores')
    .then((res) => {
      setProfesores(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []); // que se ejecute solo al inicio
  

  useEffect(() => {
    // generar string de parámetros a incrustar en la url
    let parametros = '?'; // profesorId=1&
    Object.keys(filtros).forEach((key) => {
      parametros += `${key}=${filtros[key]}&`;
    });

    // console.log(`http://localhost:5000/asignaturas${parametros}`);

    axios.get(`http://localhost:5000/asignaturas${parametros}`)
    .then((res) => {
      setAsignaturas([...res.data]);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [filtros]); // al cambiar los filtros, recargar datos

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
                  value={filtros.profesorId || 'todos'}
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
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label=""
              value={buscar || ''}
              onChange={handleChangeBuscar}
              onKeyPress={handleOnBuscar}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
              }}
      />
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