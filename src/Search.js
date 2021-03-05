import {Component} from 'react';
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap'

export default class search extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: this.props.title,
            Character: '',
        }
    }
    CharacterFind =(e)=>{
        
         let target = e.target.value;
         this.setState({Character:target});
         this.props.CharacterFind(target);
         
    }

    render(){
        
        return(
            <div>
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} style={{top:'50px', margin:'0 0 70px 0 '}} > {/*para que form.group pueda establever ancho del input debe tener el form.row antes */}
                        <Form.Control style={{width:'300px' , margin:'0 auto'}} placeholder='Nombre...' onChange={(e)=> this.CharacterFind(e)}></Form.Control>
                    </Form.Group>
                    </Form.Row>
                </Form>
                <br/>
            </div>
        );
    }
}