import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    console.log("rendered");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

/**
 * #2 JSX & Props
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2015/06/01/0467fec40dc5df750f026e7a87b4b1261.jpg",
    rating: 4.7
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
*/

export default App;
