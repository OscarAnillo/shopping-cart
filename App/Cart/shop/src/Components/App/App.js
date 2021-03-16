import {useRef, useEffect} from 'react';

/* Material-ui */
import {Button, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

/* gsap */
import gsap from 'gsap';


const useStyles = makeStyles(theme => ({
  divBg : {
    textAlign: 'center',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  divText: {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '2em',
    width: '70%',
    [theme.breakpoints.up('sm')] : {
      maxWidth: '300px'
    }
  },
  typographyStyle: {
    color: '#fff',
    fontSize: '2rem',
    [theme.breakpoints.up('sm')] : {
      fontSize: '3rem',
    }
  }
}))

function App() {
  const classes = useStyles()
  const bgRef = useRef(null);
  const divTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bgRef.current,{opacity:0, duration: 2},{opacity:1, duration: 2})
    gsap.fromTo(divTextRef.current, {opacity:0, duration: 2}, {opacity:1, duration: 2})
  },[])
  return (
    <div className={classes.divBg} ref={bgRef}>
      <div className={classes.divText} ref={divTextRef}>
        <Typography className={classes.typographyStyle}>Oscar Anillo</Typography>
        <Button variant="contained" color="primary">CHECK!</Button>
      </div>
    </div>
  );
}

export default App;
