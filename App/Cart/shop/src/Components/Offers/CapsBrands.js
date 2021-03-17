import {useRef, useEffect} from 'react';

/* Components */
import capsData from '../Data/CapsData';

/* Material-ui */
import {Typography, Card, CardHeader, CardMedia} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import gsap from 'gsap/gsap-core';

/* Gsap */

const useStyles = makeStyles(theme => ({
    div: {
        minHeight: '100vh',
        background: 'navy',
        textAlign: 'center'
    },
    typographyStyle: {
        color: '#fff',
        fontSize: '2.5rem'
    },
    divMap: {
        width: '100%',
        [theme.breakpoints.up('sm')] : {
            width: '80%',
            margin: 'auto'
        },
        [theme.breakpoints.up('md')] : {
            display: 'inline-block',
            width: '29%',
            margin: '0 .5em'
        }
    },
    linkStyle: {
        textDecoration: 'none'
    },
    cardStyle: {
        background: '#000',
        margin: '1em 0',
        padding: '.5em 0',
        color: '#fff'
    },
    CardImage: {
        height: 250,
        [theme.breakpoints.up('sm')] : {
            height: 320,
        },
        [theme.breakpoints.up('md')] : {
            height: 500,
        }
    }
}))

export default function CapBrands(){
    const classes = useStyles();
    const {data} = capsData;
    const typographyRef = useRef(null);

    useEffect(() => {
        gsap.from(typographyRef.current, {y: -100, opacity: 0, duration: 1})
    }, [])

    return(
        <div className={classes.div}>
            <Typography className={classes.typographyStyle} ref={typographyRef}>Our Brands</Typography>
            <div>
                {data.map(x => (
                    <div className={classes.divMap} key={x.id}>
                        <Link to={`/${x.name}`} className={classes.linkStyle}>
                            <Card className={classes.cardStyle}>
                                <CardHeader title={x.name}/>
                                <CardMedia image={x.image} className={classes.CardImage}/>
                            </Card>
                        </Link>
                        </div>
                ))}
            </div>
        </div>
    )
}