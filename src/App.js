import React from "react";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

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

  state = {
    score: 0,
    highscore: 0,
    clickedPuppies: []
  };

  selectPuppy = id => {
    let clickedPuppyIds = this.state.clickedPuppies;
    if (clickedPuppyIds.includes(id)) {
      alert("Game Over");
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score });
      }
      this.setState({ score: 0 });
      this.setState({ clickedPuppies: [] });

    } else {
      clickedPuppyIds.push(id)
      this.setState({ score: this.state.score + 1 });
    }
  };


  render() {
    const shuffledImages = shuffle(images);

    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center container-fluid ">
          <div className="container">
            <h1 className="display-4">PUPPY MEMORY GAME</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once or the Game will be over! Click on any image to begin.</p>
          </div>
        </div>
        <nav className="navbar justify-content-center">
          <p> Current Score: {this.state.score}   |   High Score: {this.state.highscore}</p>
        </nav>
        <div className="container images">
          <div className="row justify-content-center">
            {shuffledImages.map(image => (
              <button key={image.id} onClick={() => this.selectPuppy(image.id)}>
                <ImageCard image={image.image} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );

  }

}


export default App;
