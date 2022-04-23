import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Checkout = ()=>{

    return(
        <Link className="btnCheckoutLink" to='/cart'>
            <Button className="btnCheckout" variant="outlined" color="primary">Checkout</Button>
        </Link>
    );
}

export default Checkout;