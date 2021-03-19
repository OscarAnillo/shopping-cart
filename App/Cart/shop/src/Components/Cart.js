import { Card, CardMedia, CardHeader, Typography, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    div: {
        background: 'rgba(255, 255, 255, 0.3)'
    },
    divText: {
        border: '1px solid #eee',
        width: '90%',
        margin: '1em auto'
    },
    typographyTitle: {
        fontSize: '2rem'
    },
    typographySubtitle: {
        fontSize: '1.3rem'
    }, 
    sectionStyle: {
        display: 'inline-block',
        width: '90%',
    },
    divMap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardStyle: {
        paddingBottom: '1em',
        margin: '.5em 0',
        [theme.breakpoints.up('md')] : {
            width: 400
        }
    },
    cardImage: {
        height: 100,
        [theme.breakpoints.up('md')] : {
            height: 300,
            width: 400
        }
    },
    divQty: {
        border: '1px solid #bbb',
        padding: '1em'
    },
    divQtyText: {
        fontSize: '1.3rem',
        [theme.breakpoints.up('md')] : {
            fontSize: '2rem'
        }
    }

}))

export default function Cart(props){
    const { cartItems, onAdd, onRemove } = props;
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <div className={classes.divText}>
                <Typography className={classes.typographyTitle}>Take'em with you!</Typography>
                {cartItems.length === 0 && (<Typography>Your cart is empty</Typography>)}
                <section className={classes.sectionStyle}>
                    {cartItems.map((item) => (
                        <div className={classes.divMap} key={item.id}>
                            <Card className={classes.cardStyle}>
                                <CardMedia image={item.image} className={classes.cardImage}></CardMedia>
                                <CardHeader title={item.name} subheader={item.discount}></CardHeader>
                                <Button variant="contained" color="primary" onClick={() => onAdd(item)}>+</Button>
                                <Button variant="outlined" color="secondary" onClick={() => onRemove(item)}>-</Button>
                            </Card>
                            <div className={classes.divQty}>
                                <Typography className={classes.divQtyText}>{item.qty}</Typography>
                            </div>
                        </div>    
                    ))}
                    
                </section>
            </div>
            
        </div>
    )
}