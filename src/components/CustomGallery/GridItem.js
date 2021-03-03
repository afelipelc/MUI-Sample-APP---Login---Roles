import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  item: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: '0',
    backgroundColor: '#a7a7a7',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
    objectFit: 'cover',
  },
  overaly: {
    position: 'absolute',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.55)',
    fontSize: '1rem',
    textAlign: 'center',
    zIndex: '1',
  },
}));

const GridItem = ({ id, title, file, overaly }) => {
  const classes = useStyles();

  return (
    <a href="on" className={classes.item}>
      {overaly && <span className={classes.overaly}>{overaly}</span>}
      {file && (
          <img src={file} className={classes.image} alt={title} title={title} />
        )}
    </a>
  );
};

export default GridItem;
