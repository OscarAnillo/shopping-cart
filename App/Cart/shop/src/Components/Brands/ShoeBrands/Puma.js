import {useState, useRef, useEffect} from 'react';

/* Material-ui */
import {AppBar, Tab, Toolbar, Badge, Typography, Tabs, Card, CardHeader, CardMedia, Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/core/styles';

/* component */
import pumaModels from '../../Models/ShoeBrandModels/PumaModels'

/* Gsap */
import gsap from 'gsap/gsap-core';

const useStyles = makeStyles(theme => ({
    divBg: {
        minHeight: '100vh',
        backgroundImage: 'url(https://static.highsnobiety.com/thumbor/uxoHE4p_jq15MsJ7BG0GS3KBbfc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/09/22141502/puma-sale-main-22.jpg)',
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
            height: 300
        }
    },
    cardButton: {
        margin: '.5em'
    }
    
}))

export default function Adidas(props){
    const classes = useStyles();
    const {product} = pumaModels;
    const [cartItems, setCartItems] = useState([]);
    const bgRef = useRef(null);
    const countCartItems = cartItems.length;
    
    useEffect(() => {
        gsap.fromTo(bgRef.current, {opacity: 0, duration: 2}, {opacity: 1, duration: 2})
    }, [])

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };

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
                        <div>
                            {countCartItems.length !== 0 &&  (<ShoppingCartIcon />)}
                            {countCartItems ? (<Badge color="secondary" badgeContent={countCartItems}></Badge>) : ("")}
                                
                        </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </section>
            <div>
                <Typography className={classes.typographyStyle  }>Our Models</Typography>
                <div>
                    {product.map(x => (
                        <div className={classes.divMap}>
                            <Card className={classes.cardStyle} key={x.id}>
                                <CardHeader title={x.name} subheader={`${x.discount} off`}/>
                                <CardMedia image={x.image} className={classes.cardImage}/>
                                <Button variant="contained" color="primary" endIcon={<ShoppingCartIcon />} className={classes.cardButton} onClick={onAdd}>Add to </Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}