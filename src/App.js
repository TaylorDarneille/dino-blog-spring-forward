import './App.css';
import React, { Component } from 'react'
import Post from './Post'
import posts from './posts'

class App extends Component {
  // 'controlled form' state
  state = {
    title: '',
    author: '',
    body: '',
    comments: []
  }

  handleSubmit = e => {
    // prevent the defualt behavoir of the synthetic form submission even
    e.preventDefault()
    console.log(e)
    // add whatever is in state to the array of posts
    posts.push(this.state) // imiatation axios
    // reset state to trigger a re-render
    this.setState({
      title: '',
      author: '',
      body: '',
      comments: []
    })
  }

  handleTextChange = (e) => {
    // input change synthetic event
    //  dp npt need the prev value in a controlled form
    // triggers re-render on every key press
    this.setState({
      body: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    const postComponents = posts.map((post, index) => {
      return (
        <Post 
          key={`Post-${index}`}
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
        />
      )
    })
    return(
      <>
        {postComponents}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='body'>Post:</label>
          <textarea
            id="body"
            // need some stuff for the controlled -- 
            // 1. add ad event handler for when the user types into the form (onChange handler) that updates state
            onChange={this.handleTextChange}
            // 2. set the value of the input to be what is in state
            value={this.state.body}

          >
          </textarea>

          <input type="submit" />
        </form>
      </>
    )
  }
}

export default App;
