import {useRef, useEffect} from 'react';
import classnames from 'classnames';
/* Components */
import offers from '../Data/OffersData';

/* Material-ui */
import {Card, CardHeader, CardMedia, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

/* React-router */
import { Link } from 'react-router-dom';

/* gsap */
import gsap from 'gsap';

const useStyles = makeStyles(theme => ({
    divBg: {
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #858585, #000)',
        
    },
    divText: {
        textAlign: 'center',
        padding: '1em 0',
    },
    typographyStyle: {
        fontSize: '3rem',
        color: '#fff',
        textShadow: '1px 3px 5px #000',
    },
    section: {
        [theme.breakpoints.up('lg')] : {
            width: '70%',
            margin: 'auto',
        },
    },
    divMap: {
        [theme.breakpoints.up('sm')] : {
            width: '80%',
            margin: 'auto'
        },
        [theme.breakpoints.up('md')] : {
            display: 'inline-block',
            width: '31.5%',
            margin: '0 .5em'
        },
    },
    linkStyle: {
        textDecoration: 'none'
    },
    cardStyle: {
        background: '#fff',
        margin: '1em 0'
    },
    cardImage: {
        height: 300,
        [theme.breakpoints.up('sm')] : {
            height: 400
        },
        [theme.breakpoints.up('md')] : {
            height: 550
        },
    }
}))

export default function OffersDeals(){
    const classes = useStyles();
    const typographyRef = useRef(null);
    const divRef = useRef(null);
    const {data} = offers;
    
    useEffect(() => {
        gsap.fromTo(typographyRef.current, {duration: 1, scale: 4, ease: 'back'}, {duration: 1,scale: 1, ease: 'back'})
        gsap.fromTo('.divMap', {x: 200, opacity: 0, duration: 1}, {x: 0, opacity: 1, duration: 1})
    }, [])

    return(
        <div className={classes.divBg}>
            <div className={classes.divText}>
                <Typography className={classes.typographyStyle} ref={typographyRef}>DEALS!</Typography>
            </div>
            <section className={classes.section}>
                {data.map(x => (
                    <div key={x.id} ref={divRef} className={classnames(classes.divMap, 'divMap')}>
                        <Link to={`/offers/${x.name}`} className={classes.linkStyle}>
                            <Card className={classes.cardStyle}>
                                <CardHeader title={x.name}/>
                                <CardMedia image={x.image} className={classes.cardImage}/>
                            </Card>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}