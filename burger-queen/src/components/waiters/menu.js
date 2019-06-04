import React from 'react';
import BreakfOptions from './breakflist';
import MealList from './mealList'

class ToggleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: "2"};
  }

  Toggleclick(e) {
    const id = e.target.id;
    console.log(e.target);
    this.setState({ disabled: id});
    
  }

  render() {
    return (
      <div >
        <button disabled={this.state.disabled === "1"} onClick={this.Toggleclick.bind(this)} id="1">
          Desayuno
        </button>
        <button disabled={this.state.disabled === "2"} onClick={this.Toggleclick.bind(this)} id="2">
          Comida
        </button>
        {this.state.disabled === "2" ?  <MealList /> : <BreakfOptions />}
 
      </div>
    );
  }
}

  export default ToggleMenu;