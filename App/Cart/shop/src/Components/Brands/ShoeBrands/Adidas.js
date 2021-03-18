import {useState, useRef, useEffect} from 'react';

/* Material-ui */
import {AppBar, Tab, Toolbar, Badge, Typography, Tabs, Card, CardHeader, CardMedia, Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/core/styles';

/* component */
import adidasModels from '../../Models/ShoeBrandModels/AdidasModels'
import Cart from '../../Cart';

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
    }, 
    cardButton: {
        margin: '.5em'
    },
    sectionCart: {
        minHeight: '100vh',
    }
    
}))

export default function Adidas(props){
    const classes = useStyles();
    const {product} = adidasModels;
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
    
      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

    return(
        <div className={classes.divBg} ref={bgRef}>
            <section >
                <AppBar position="sticky">
                    <Toolbar className={classes.appBarStyle}>
                        <Tabs>
                            <Tab label="models" value={0}/>
                            <Tab label="prices" value={1}/>
                        </Tabs>
                        <div>
                            {countCartItems.length !== 0 &&  (<ShoppingCartIcon />)}
                            {countCartItems ? (<Badge color="secondary" badgeContent={countCartItems}></Badge>) : ("")}
                                
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
                                <Button variant="contained" color="primary" endIcon={<ShoppingCartIcon />} className={classes.cardButton} onClick={onAdd}>Add to </Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <section className={classes.sectionCart}>
                <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
            </section>
        </div>
    )
}