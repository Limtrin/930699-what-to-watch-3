import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const filmsList = [
  {
    id: `bohemian-rhapsody`,
    name: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`
  },
  {
    id: `aviator`,
    name: `Aviator`,
    image: `img/aviator.jpg`
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          filmName={`Grand Budapest`}
          filmGenre={`Drama`}
          filmYear={`1985`}
          filmsList={filmsList}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});