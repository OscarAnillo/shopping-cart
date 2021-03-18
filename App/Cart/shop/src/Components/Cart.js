import { Card, CardMedia, CardHeader, Typography, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    div: {
        background: 'rgba(255, 255, 255, 0.3)'
    },
    divText: {
        border: '1px solid #eee',
        width: '70%',
        margin: '1em auto'
    },
    typographyTitle: {
        fontSize: '2rem'
    },
    typographySubtitle: {
        fontSize: '1.3rem'
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
            </div>
            <section>
                {cartItems.map((item) => (
                    <div>
                        <Card style={{width: 150}}>
                            <CardMedia image={item.image} style={{height:'150px', border:'1px solid red'}}></CardMedia>
                            <CardHeader title={item.name} subheader={item.discount} style={{border:'1px solid blue'}}></CardHeader>
                            <Button variant="contained" color="primary" onClick={onAdd}>+</Button>
                            <Button variant="outlined" color="secondary" onClick={onRemove}>-</Button>
                        </Card>
                    </div>
                ))}
                
            </section>
        </div>
    )
}