import {useRef, useEffect} from 'react';

/* Material-ui */
import {AppBar, Tab, Toolbar, IconButton, Badge, Typography, Tabs} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from '@material-ui/core/styles';

/* Gsap */
import gsap from 'gsap/gsap-core';

const useStyles = makeStyles(theme => ({
    divBg: {
        height: '100vh',
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
    
}))

export default function Adidas(){
    const classes = useStyles();
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
                        <Badge><ShoppingCartIcon /></Badge>
                        </div>
                    </Toolbar>
                </AppBar>
            </section>
        </div>
    )
}