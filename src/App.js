import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg"
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2015/06/01/0467fec40dc5df750f026e7a87b4b1261.jpg"
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function App() {
  return <div className="App">{foodILike.map(renderFood)}</div>;
}

export default App;
