import React from 'react';

export default class FavoriteFoods extends React.Component {

  render () {

    return (

      <div>
        <h1>Favorite Foods</h1>
        <ul id="food-list">
        {this.props.foods ? this.props.foods.map(food => <li key={food.id}>{food.name}</li>) : null}

        </ul>
      </div>

    );

  }

}
