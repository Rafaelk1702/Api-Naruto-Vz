
import {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import {Container,Row,Col} from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
//import * as characters from './i18n/locales/es/characters.json';
import Chars from './chars';
import Search from './Search';
import { withTranslation } from 'react-i18next';
import { Suspense } from 'react';
import i18n from './i18n/config';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: i18n.store.data.es.translations.data,
      characterfind: '',
      page:1,
      idChar : 1,
      over:0,
      button_char: 'Ver detalles',
      href: 'https://naruto.fandom.com'
    }
  }
  CharacterFind=(e)=>{
    let string1 = e.charAt(0).toUpperCase(); //tomamos el primer caracter y lo convertirmos a mayuscula
    let string2 = e.substring(1,e.length); // desde el segundo caracter
    let value = string1 + string2; //unimos
    this.setState({characterfind: value});   
    // console.log(string1);
    // console.log(string2);
    // console.log(value);
  }
  Traductor(){
    
    //const {t, i18n} = useTranslation(["Characters"]);

  }
  //fetch
  componentDidMount(){
    //fetch('https://naruto-api-prod.herokuapp.com/v1/characters')
    //.then(response => response.json())
   // .then(data => this.setState({characters: data.data}))
  }
  //"id":3413 brinca a id":3417 entre muchos otros por lo que no hay 3983 characters
  // si no 1252, por lo que hay que tener en cuenta mientras iteramos.
    /*la sentencia del return tiene que estar al laodo paera que funcione */
  recordCount(ch,key){
    var hrefp = this.state.href + ch.href;
    //console.log(hrefp);
    var record = (  <Chars
          key={key} id={ch.id} title={ch.title} href={hrefp}
          picture= {ch.thumbnail} description={ch.description.text}
          button= {this.state.button_char}
          />
    )
      return record;
    }
  idPage = (num,active,e) => {
    for (let index = 0; index < num+1; index++){
      if (e.target.text == index ){
        // CharacterTemp = CharacterTemp[index];
        active = index;
        this.setState({idChar:index, characterfind:'', over: index });
        //solo llamo a un state y modifico varios. no puedo llamar a varios state
      //  console.log(this.state.characterfind)
       }
    }
  }

  render(){
     var page = 0;
     var num = 0;
     var i = 0;
     var over = 0;
     var items =[];
     var CharacterTemp =[];
     var active= 0;
     var limit = 21;
     //var limit2 = 21;   
     var itemsCharacters = [];
     var find = [];
     const changeLanguage = () =>{
      //i18n.changeLanguage("en")
      this.setState ({ characters: i18n.store.data.en.translations.data, button_char: 'See details'});
     }
     //var over2= false;
      //console.log(this.state);
    
{this.state.characters.map((ch,key) =>{
        if (ch.title.includes(this.state.characterfind)){
          var hrefp = this.state.href + ch.href; 
        find.push(<Col key={key}>
            {/* <br/> */}  
               
              <Chars
              key={key} id={ch.id} title={ch.title} href={hrefp}
              picture= {ch.thumbnail} description={ch.description.text}
              button= {this.state.button_char} href_ini= {this.state.href}
              />        
            {/* find2.push = [...find]; */}
          </Col>)
          // console.log(find)
        }
      CharacterTemp.push (this.recordCount(ch,key));
      page++;
          // this.state.characters.length-1 == key esto para que incluya los sobrantes.es decir no solo por lotes de 21, pues los 14 restantes no entrarian en la condicion page===limit, por lo q si this.state.characters.length-1 == key estaria diciendo si el arreglo llego a su fin, q me incuya esos restantes q no entraron en la condicion primera page===limit
      if (page===limit || this.state.characters.length-1 == key){
        i++;
        itemsCharacters[i] = [...CharacterTemp] ;
        page = 0;
        num++;
        over++;
        CharacterTemp = [];          
        let num2= num;
        //cambie a num2 porq el active no lo tomaba en la paginacion al hacer click al compararse active={num2 === this.state.idChar} ya que tiene 0 por delante
              if(num < 10){
                num= '0'+num;
              }       
        //   }
          //cada vez q el estado cambie, la condicion se activara de e atributo active, si num q es la key es igual, se mostrara en la vista ya que tengo directamente el estado para que se muestre
          items.push(
          <Pagination.Item  key={num2} active={num2 === this.state.idChar} onClick={(e)=> this.idPage(num,active,e)}>
          {num}
          </Pagination.Item>,
          );
                // }
      }
    }
  )  
}
//let Dirpicture = '/public/ass'
    //console.log(this.state.characters)

    return(
      <div>
        <button className="idioma" onClick={changeLanguage}>Cambiar al inglés</button>
          <Suspense fallback="Cargando traducciones">
          
          {/* <Translation>
            {
              t => <h1>{t('Welcome to React')}</h1>
            }

          </Translation> */}
            
            
          </Suspense>
          <Container fluid style={{ backgroundColor:'rgb(127, 114, 140)', backgroundSize:'100%'}}>
          <Row className='bgdiv'>
              <img className='bg' src='https://www.wallpapertip.com/wmimgs/28-285102_hyuga-hinata.jpg'></img>
          </Row>
      <Search className='sh' CharacterFind={this.CharacterFind}/>
      
      
      <div className='center'>
            <Row className="justify-content-md-center">
            <Col md='auto'>
            <Pagination>   
                <Row className="justify-content-md-center style-pagination">
                  {/* <Pagination.First />
                  <Pagination.Prev/> */}
                  {items.splice(0,20)}                
                  {items.splice(0,20)}
                  {items.splice(0,20)}
                  {/* <Pagination.Next/>
                  <Pagination.Last/>*/}
                </Row>           
            </Pagination>
            </Col>
            </Row>
      </div>
        <Row className="justify-content-md-center" > {/*centrar */}
          {/* for */}
          
          <CardColumns>
            {/**la sentencia del return tiene que estar al laodo paera que funcione */}
            {/* para colocar una al lado de otra usa row y col  */}
            {/* <h2>{this.state.idChar}</h2> */}
            {this.state.characterfind.length > 0 ? find : itemsCharacters[this.state.idChar]}
          </CardColumns>
        </Row>    
    </Container>

      </div>
    );
  }
}

export default withTranslation()(App);
