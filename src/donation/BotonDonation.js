import {Component} from 'react';
import Button from 'react-bootstrap/Button';

class BotonDonation extends Component{
    constructor(props) {
        super(props);
      }
    render(){
    return(
        <div>          
            <button className="paypal">
                <a className="paypal" href="/index" target='_blank' class="myButton0a"><small>Donar a <span class="paypal1">Pay</span><span class="paypal2">Pal</span> para seguir el desarrollo y las traducciones </small></a>
            </button>
        </div>
        );
    }
}
export default BotonDonation;