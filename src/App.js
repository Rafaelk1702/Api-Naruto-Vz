
import {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import {Container,Row,Col} from 'react-bootstrap';
import * as characters from './data/characters.json';
import Chars from './chars';
import Search from './Search'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: characters.data,
      characterfind: '',
      page:1,
      idChar : 1,
      over:0
    }
  }
  CharacterFind=(e)=>{
    this.setState({characterfind: e});

  }
  //fetch
  componentDidMount(){
    //fetch('https://naruto-api-prod.herokuapp.com/v1/characters')
    //.then(response => response.json())
   // .then(data => this.setState({characters: data.data}))
  }

  //"id":3413 brinca a id":3417 entre muchos otros por lo que no hay 3983 characters
  // si no 1252, por lo que hay que tener en cuenta mientras iteramos.

  recordCount(ch,key){

    var record = (  <Col key={key}>  {/**la sentencia del return tiene que estar al laodo paera que funcione */}
        <br/>
          <Chars
          key={key} id={ch.id} title={ch.title} href={ch.href}
          picture= {ch.thumbnail} description={ch.description.text}
          />

      </Col>)

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
     var items =[];
     var CharacterTemp =[];
     var active= 0;
     var limit = 21;
     var limit2 = 21;
   
     var itemsCharacters = [];
     var find = [];
     var over=0;
     var over2= false;
    //  console.log()



     {this.state.characters.map((ch,key) =>{

       if (ch.title.includes(this.state.characterfind)){
       find.push(<Col key={key}>
          <br/>
            <Chars
            key={key} id={ch.id} title={ch.title} href={ch.href}
            picture= {ch.thumbnail} description={ch.description.text}
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
             over++

              CharacterTemp = [];
              // if (this.state.over === limit2-1){

                
                
              // }

                //  if (num+2 === this.state.idChar
                //    || num-2 === this.state.idChar)

                //   {
                //   // items.push(<Pagination.Ellipsis />);
                //   }

                
                // console.log(num)
                //  if (over < limit2+1 ) {
                //   console.log(limit2)
                //   console.log(over)
                //   if (this.state.over === limit2){
                    
                //     console.log('sdsd')
                //       items =[];
                //       over=  over + limit;
                //       num = over;
                //       limit2 = limit2 + limit;
                
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
  )  }



//let Dirpicture = '/public/ass'
    //console.log(this.state.characters)
    return(
      <div>

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
                  <Pagination.Last/>                 */}
                </Row>         
                
            </Pagination>
             </Col>
             </Row>
           </div>

  {/* for */}
  <Row>
   {/**la sentencia del return tiene que estar al laodo paera que funcione */}
   {/* para colocar una al lado de otra usa row y col  */}
        <br/>

        {/* <h2>{this.state.idChar}</h2> */}
        {this.state.characterfind.length > 0 ? find : itemsCharacters[this.state.idChar]}



  </Row>


        </Container>
      </div>


    );
  }
}

export default App;
