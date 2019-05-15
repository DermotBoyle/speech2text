import React, { Component, Fragment } from "react";

class Dermot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      content: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
      )
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            id: res.data
        })

  renderQuote = () => {
    const { title, content } = this.state.quote;
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <h1>Quote Generator</h1>
        <button onClick={this.state.quote}>Click Here</button>
      </Fragment>
    );
  }
}

export default Dermot;
