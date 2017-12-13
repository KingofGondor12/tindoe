import React, { Component } from 'react';

const groceryList = [
  { id: 1, name: 'Milk', qty: 2 },
  { id: 2, name: 'Coke', qty: 1 },
  { id: 3, name: 'Bread', qty: 3 },
  { id: 4, name: 'Jelly Snakes', qty: 30 }
];

const ShoppingList = ({ items }) => (
  <ul>
    {items.map((item) => <ListItem key={item.id} item={item} />)}
  </ul>
);

const ListItem = ({ item}) => (
  <li>{item.qty} x {item.name}</li>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList items={groceryList} />
      </div>
    );
  };
};

export default App;
