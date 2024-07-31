import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const nayaks =['kabir', 'alamgir', 'rafik', 'salam', 'ripon', 'masud'];
const products=[
  {name: 'photoshpp', price: '$90.99'},
  {name: 'ilustaror', price: '$80.99'},
  {name: 'pdf reader', price: '$50.99'}

];

const productName= products.map(products=>products.name);
console.log(productName);
  return (
    <div className="App">

    
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cumque!</p>
      
      <ul>
        {
          nayaks.map(nayak=> <li>{nayak}</li>)
        }
        {
          products.map(prod=><li>{prod.name}</li>)
        }
      </ul>
        {
          products.map(pd=><Product product={pd}></Product>)
        }
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Person name={nayaks[2]} food="rich"></Person>
      <Person name="Kabir"></Person>
      <Person></Person>
      <Counter></Counter>
      <Users></Users>
   
    </div>
  );
} 
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUsers(data));
  }, [])
  return(
    <div>
      <h3>dynamic user:{users.length}</h3>
    <ul>
    {
        users.map(user=><li>{user.email}</li>)
      }
    </ul>
    </div>

  )
}

function Counter(){
const[count, setCount]= useState(10);
const handleInrease = () =>setCount(count+1);
const handleDecrease = () =>setCount(count-1);

  return(
    <div> 
      <h1>Count:{count}</h1>

      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleInrease}>Increase</button>
    </div>
  )
}


function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '6px',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price}= props.product;
return (
  <div style= {productStyle} >
    <h3>name: {name} </h3>
    <h5>pirce:{price} </h5>
    <button>buy now</button>
  </div>
)
}

function Person(props) {
  console.log(props)
  const style={ color:'red', backgroundColor:'pink', border:'2px solid green'};
  return (
    <div style={style}>
      <h1>Name:{props.name} {props.food} </h1>
      <p style={{fontSize:'50px'}}>soha sister name : Sifa</p>
    </div>
  )
}



export default App;
