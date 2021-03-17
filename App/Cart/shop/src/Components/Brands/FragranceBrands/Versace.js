import {useRef, useEffect} from 'react';

/* Material-ui */
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

/* Gsap */
import gsap from 'gsap/gsap-core';

const useStyles = makeStyles(theme => ({
    divBg: {
        height: '100vh',
        backgroundImage: 'url(https://aromasyrecuerdos.com/wp-content/uploads/2020/09/versace_eaufraiche.jpeg)',
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        [theme.breakpoints.up('md')] : {
            backgroundPosition:'top',
        }
    }, 
    sectionStyle: {
        border: '1px  solid #111',
        borderRadius: '5px',
        width: '50%',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '1em 0',
        background: 'rgba(255, 255, 255, 0.4)',
        [theme.breakpoints.up('md')] : {
            maxWidth: '500px',
        }
    },
    typographyStyle: {
        fontSize: '2.5rem'
    }
}))

export default function Versace(){
    const classes = useStyles();
    const bgRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(bgRef.current, {opacity: 0, duration: 2}, {opacity: 1, duration: 2})
        gsap.from(sectionRef.current, {x: -200, duration: 1})
    }, [])
    return(
        <div className={classes.divBg} ref={bgRef}>
            <section className={classes.sectionStyle} ref={sectionRef}>
                <Typography className={classes.typographyStyle}>Versace</Typography>
            </section>
        </div>
    )
}