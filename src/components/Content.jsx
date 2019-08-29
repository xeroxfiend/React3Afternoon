import React, {Component} from "react";
import "../Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   name: "",
    //   from: "",
    //   job: "",
    //   employer: "",
    //   movie1: "",
    //   movie2: "",
    //   movie3: "",
      index: 0
    };
  }

  handleClickPrevious() {
    if (this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
      })
    }
  }

  handleClickNext() {
      if (this.state.index < 24)
    this.setState({
      index: this.state.index + 1
    });
  }

  render() {
    let userArray = this.props.data;
    // console.log(userArray);

    return (
      <div className="content">
        <div className="number">
          <h1 className="count">{`${this.state.index + 1}/${userArray.length}`}</h1>
        </div>
        <h1 className="name">{`${userArray[this.state.index].name.first} ${userArray[this.state.index].name.last}`}</h1>
        <div className="user-info">
          <p className="from">{`${userArray[this.state.index].city}, ${userArray[this.state.index].country}`} </p>
          <p className="job">{userArray[this.state.index].title}</p>
          <p className="employer">{userArray[this.state.index].employer}</p>
        </div>
        <div className="movies">
          <h3 className="movie-header">Favorite Movies:</h3>
          <p className="movie1">
            1. {userArray[this.state.index].favoriteMovies[0]}
          </p>
          <p className="movie2">
            2. {userArray[this.state.index].favoriteMovies[1]}
          </p>
          <p className="movie3">
            3. {userArray[this.state.index].favoriteMovies[2]}
          </p>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClickPrevious()} className='previous' >{'<'} Previous</button>
          <button onClick={() => this.handleClickNext()} className='next' >Next {'>'}</button>
        </div>
      </div>
    );
  }
}

export default Content;
