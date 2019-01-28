class GroceryListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hovering : false
      }
    }
  
    onListItemMouseEnter() {
      this.setState({
        hovering: true
      });
    }
  
    onListItemMouseLeave() {
      this.setState({
        hovering: false
      });
    }
  
    render() {
      var style = {
        fontWeight: this.state.hovering ? 'bold' : 'normal'
      };
  
      return (
        <li
          style={style}
          onMouseEnter={this.onListItemMouseEnter.bind(this)}
          onMouseLeave={this.onListItemMouseLeave.bind(this)}
        >
          {this.props.item}
        </li>
      )
    }
  }
  
  //Create a React Component 
  var GroceryList = (props =>
    <ul>
      {props.items.map(item =>
        <GroceryListItem item = {item} />
      )}
  </ul>  
  );
  
  //Render the react component to DOM
  ReactDOM.render(< GroceryList items = {['kale', 'cucumber']} /> , document.getElementById('app'));