import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Img from './img/portada.PNG'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormDonation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            donante: '',
            mensaje: '',
            emailDonante : '',      
            montoDonation : '5'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
            
      }
    //   componentDidMount () {
    //     const script = document.createElement("script");
    
    //     script.src = "js/miScript.js";
    //     script.async = true;
    
    //     document.body.appendChild(script);
    // }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        
        event.preventDefault();
        // alert('Your favorite flavor is: ');
        // console.log('handle');
       // document.getElementById('myForm').submit(); //habilitar para donaciones fuera de Venezuela
        
      }
      renderSubmit(){
        if(this.state == null){
            return;
        }
        
        return(
            console.log('exito')
        )
      }

    render() {
      
        
    return(
        <div>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

            <section class="section">
            <div class="container" >

            <div class="row mb-5">
                <div class="col-md-12 img">
                <img src={Img} class="img-fluid" alt=""/>
                
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col-lg-7 col-md-7 text-lg-left text-center">
                <div class="p-5 shadow rounded content createcuentaUser">
                    <h2 class="section-title text-center">Mi Donación</h2>
                    
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" name="para" value="Silvano Lopez" hidden/>

                    <div class="form-row">
                        <div class="form-group col-md-12">
                        <label htmlFor="donante">Nombre del Donante</label>
                        <input type="text" class="form-control" name="donante" value={this.state.donante} onChange={this.handleInputChange} required autoFocus/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                        <label htmlFor="mensaje">Mensaje</label>
                        <input type="text" class="form-control comentarioGrupo" name="mensaje" value={this.state.mensaje} onChange={this.handleInputChange} required/>
                        <label htmlFor="mensaje" class="label label-important"></label>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label htmlFor="emailDonante">Email</label>
                        <input type="email" class="form-control" name="emailDonante" value={this.state.emailDonante} onChange={this.handleInputChange} required/>
                        </div>
                        <div class="form-group col-md-6">
                        <label htmlFor="montoDonation">Cantidad para donar</label>
                            <select name="montoDonation" id="montoDonation" onChange={this.handleInputChange} class="form-control custom-select" required>
                            {/* <option defaultValue disabled> -- Seleccione --</option> */}
                            <option value={this.state.montoDonation}>$5</option>
                            <option value={this.state.montoDonation}>$10</option>
                            <option value={this.state.montoDonation}>$20</option>
                            <option value={this.state.montoDonation}>$25</option>
                            <option value={this.state.montoDonation}>$50</option>
                            </select>
                        </div>
                    </div>
                        
                    {/* <div class="col-md-12 mt-3 mb-5 text-center">
                        <button type="submit" class="btn btn-primary" id="sendDonation">
                        Enviar Donación 
                        </button>
                    </div> */}
                    <div class="col-md-12 mt-3 mb-5 text-center">
                        <button class="btn btn-primary" id="sendDonation" disabled>
                        Donación no disponible 
                        </button>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                        <label htmlFor="donante">Dirección Billetera Bitcoin (BTC) Disponible:</label>
                        <input type="text" class="form-control" name="donante" value="18FbTZpSh5ubx6x5G8VJRF3eBFzBT8bgS4" />
                        </div>
                    </div>

                    <div id="respuesta"></div>
                    </form>

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
                </div>
                </div>
                </div>
            </div>
            </section>


            <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
            {/* <script src="js/miScript.js"> </script> */}

            
</div>
        );

    }
}
export default FormDonation;