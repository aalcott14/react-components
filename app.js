var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList />
  </div>
  );

var GroceryList = () => (
  <ul>
    <Cucumbers />
    <Kale />
  </ul>
  );
 var Cucumbers = () => (
  <li>Cucumbers</li>
  );
 var Kale = () => (
  <li>Kale</li>
  );

 
ReactDOM.render(<App />, document.getElementById("app"));
