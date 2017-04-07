var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Cucumbers', 'Kale']} />
  </div>
  );

class GroceryList extends React.Component {
  constructor(props) {
    //React.Component.call(this,props);
    super(props);
  }

  render() {
    return (<ul>
      {this.props.items.map(item =>
        <GroceryListItem item={item} />)}
    </ul>)
  }
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onItemHover() {
    this.setState({
      hover: true
    }); 
  }
  onItemUnhover() {
    this.setState({
      hover: false
    })
  }

  render() {
    var style = {
      'font-weight': this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li style = {style} onMouseOver={this.onItemHover.bind(this)} onMouseOut={this.onItemUnhover.bind(this)}>{this.props.item} </li>)
  }

}


ReactDOM.render(<App />, document.getElementById("app"));
