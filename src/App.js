import React from "react";
import ImageCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import images from "./friends.json";
import "./App.css";


function shuffle(images) {
  let i = images.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const imagetemp = images[i];
    images[i] = images[j];
    images[j] = imagetemp;
  }
  return images;
};


class App extends React.Component {
  render() {
    const shuffledImages = shuffle(images);
    return (
      <Wrapper>
        <h1 className="title">Images List</h1>
        {shuffledImages.map(image => (
          <ImageCard id={image.id} key={image.id} image={image.image} clicked={image.clicked} />
        ))}
      </Wrapper>
    );

  }

}



export default App;
