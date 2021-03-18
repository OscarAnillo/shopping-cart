import {useRef, useEffect} from 'react';

/* Material-ui */
import {AppBar, Tab, Toolbar, IconButton, Badge, Typography, Tabs, Card, CardHeader, CardMedia} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/core/styles';

/* component */
import adidasModels from '../../Models/ShoeBrandModels/AdidasModels'

/* Gsap */
import gsap from 'gsap/gsap-core';

const useStyles = makeStyles(theme => ({
    divBg: {
        minHeight: '100vh',
        backgroundImage: 'url(https://assets.adidas.com/images/w_600,f_auto,q_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Superstar_Shoes_White_EG4958.jpg)',
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
        fontSize: '2.5rem'
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
    const {product} = adidasModels;
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
                        <div className={classes.divMap}>
                            <Card className={classes.cardStyle}>
                                <CardHeader title={x.name} subheader={x.discount}/>
                                <CardMedia image={x.image} className={classes.cardImage}/>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}