import {Component} from 'react';
import Button from 'react-bootstrap/Button';

class BotonDonation extends Component{
    constructor(props) {
        super(props);
      }
    render(){
    return(
    <form name="myForm" id="myForm" action="https://www.paypal.com/cgi-bin/webscr" method="POST">
        <input type="hidden" name="cmd" value="_donations"/>
        <input type="hidden" name="business" value="totoelgeneroso45@hotmail.com"/>
        <input type="hidden" name="item_name" value="Donacion"/>
        <input type="hidden" name="item_number" value=""/>
        <input type="hidden" name="amount" value=""/>
        <input type="hidden" name="no_shipping" value="0"/>
        <input type="hidden" name="no_note" value="1"/>
        <input type="hidden" name="currency_code" value="USD"/>
        <input type="hidden" name="lc" value="AU"/>
        <input type="hidden" name="bn" value="PP-BuyNowBF"/>
        <input type="submit" value="Submit" hidden/>
    </form>
        );
    }
}
export default BotonDonation;