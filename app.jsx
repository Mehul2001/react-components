var App = () => (
 <div>
   <h1>GroceryList</h1>
   <GroceryList fruits = {['Orange', 'Apple']}/>
 </div>
 );

 var GroceryList = (props) => {
  
  var onListItemClick = (event) => {
   console.log('I got clicked');
  };
  return (
  <div>
      <ul>
          <li onClick = {onListItemClick}>{props.fruits[0]}</li>
          <li>{props.fruits[1]}</li>
      </ul>
  </div>
 );
 }

 ReactDOM.render(<App />, document.getElementById('app'));