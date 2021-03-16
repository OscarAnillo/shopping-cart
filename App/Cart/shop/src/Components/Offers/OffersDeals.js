/* Components */
import offers from '../Data/OffersData';

/* Material-ui */
import {Card, CardHeader, CardMedia, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

/* React-router */
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    divBg: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #858585, #000)',
        
    },
    divText: {
        textAlign: 'center',
        padding: '1em 0'
    },
    typographyStyle: {
        fontSize: '3rem',
        color: '#fff',
        textShadow: '1px 3px 5px #000'
    },
    linkStyle: {
        textDecoration: 'none'
    },
    cardStyle: {
        background: '#fff',
        margin: '1em 0'
    },
    cardImage: {
        height: 300
    }
}))

export default function OffersDeals(){
    const classes = useStyles();
    const {data} = offers;
    
    return(
        <div className={classes.divBg}>
            <div className={classes.divText}>
                <Typography className={classes.typographyStyle}>DEALS!</Typography>
            </div>
            <section>
                {data.map(x => (
                    <div>
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