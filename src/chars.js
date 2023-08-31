import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withTranslation } from 'react-i18next';
import i18n from './i18n/config';

class Chars extends Component{
    constructor(props) {
        super(props);
        this.state = { imageSrcExist: true  };
      }
    
      handleImageLoaded() {
        this.setState({ imageStatus: "loaded", error: false });
      }
    
      handleImageError() {
        this.setState({ imageStatus: "failed to load", error: true });
      }
      handleImageError = () => {
        this.setState({imageSrcExist: false})
        }
    render(){
        //let image_url= 'https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg';
        //console.log(this)
        const changeLanguage = () =>{
          i18n.changeLanguage("en")
         }
         
        return(
            <div>
                
                    <Card style={{width:'16rem' }}> 
                        {/* <Card.Img variant='top' src={this.props.picture} alt='Hola' onerror = "this.onerror = null; this.src = 'https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg'; " height='300px'/ > */}
                        {/* funciona para error 403 <Card.Img variant='top' src={this.props.picture} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg"}} height='300px'/ > */}
                        {/* igual para error 403 <Card.Img variant='top' src={this.props.picture} ref={img => this.img = img} onError={() => this.img.src = 'https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg'} height='300px'/ > */}
                        {/* igual pero evitar bucle infinito <Card.Img variant='top' src={this.props.picture} onError={(e)=>{ if (e.target.src !== this.props.picture ){ e.target.onerror = null; e.target.src="https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg"; } }}  height='300px'/ > */}
                        {/* funciona para imagenes en null || <Card.Img variant='top' src={this.props.picture || 'https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg'} height='300px'/ > */}
                        <Card.Img variant='top' src={this.props.picture || 'https://i.pinimg.com/564x/04/38/75/0438751d493c84b2ef88e8f28d6aa237.jpg'} alt='Imagen no disponible' height='250px'/>
                        
                        
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                            <a href={this.props.href} target="_blank" rel="charct">
                              <Button variant="primary">{this.props.button}</Button>
                            </a>
                            
                        </Card.Body>
                    </Card>
                
                
            </div>
            
        );
    }
}
export default withTranslation()(Chars);