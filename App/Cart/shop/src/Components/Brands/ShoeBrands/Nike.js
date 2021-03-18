import {useRef, useEffect} from 'react';

/* Material-ui */
import {AppBar, Tab, Toolbar, Badge, Typography, Tabs, Card, CardHeader, CardMedia} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/core/styles';

/* component */
import nikeModels from '../../Models/ShoeBrandModels/NikeModels'

/* Gsap */
import gsap from 'gsap/gsap-core';

const useStyles = makeStyles(theme => ({
    divBg: {
        minHeight: '100vh',
        backgroundImage: 'url(https://i.pinimg.com/originals/71/78/e2/7178e28119b85f138225aadcc951622d.jpg)',
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center'
    }, 
    appBarStyle: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')] : {
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        
    },
    typographyStyle: {
        fontSize: '2.5rem',
        color: '#fff'
    },
    divMap: {
        border: '1px solid #eee',
        width: '100%',
        [theme.breakpoints.up('md')] : {
            display: 'inline-block',
            width: '30%'
        }

    },
    cardStyle: {
        margin: '1em'

    },
    cardImage: {
        height: 230,
        [theme.breakpoints.up('sm')] : {
            height: 330
        }
    }
    
}))

export default function Adidas(props){
    const classes = useStyles();
    const {product} = nikeModels;
    const bgRef = useRef(null);
    
    useEffect(() => {
        gsap.fromTo(bgRef.current, {opacity: 0, duration: 2}, {opacity: 1, duration: 2})
    }, [])

    return(
        <div className={classes.divBg} ref={bgRef}>
            <section >
                <AppBar position="static">
                    <Toolbar className={classes.appBarStyle}>
                        <Tabs>
                            <Tab label="models"/>
                            <Tab label="prices"/>
                        </Tabs>
                        <div>
                            <Badge color="secondary"><ShoppingCartIcon /></Badge>
                        </div>
                    </Toolbar>
                </AppBar>
            </section>
            <div>
                <Typography className={classes.typographyStyle  }>Our Models</Typography>
                <div>
                    {product.map(x => (
                        <div className={classes.divMap} key={x.id}>
                            <Card className={classes.cardStyle}>
                                <CardHeader title={x.name} subheader={`${x.discount} off`}/>
                                <CardMedia image={x.image} className={classes.cardImage}/>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}