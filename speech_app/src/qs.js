import React, { Component, Fragment } from "react";

class Dermot extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        content: "",
        link: "",
        title: "",
        data: "data"
      },
      hasQuote: false
    };

    this.endpoint =
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=8";
  }

  getRandomQuote = event => {
    fetch(this.endpoint)
      .then(response => response.json())
      .then(data => {
        if (data[0].content && data[0].title && data[0].link) {
          let { quote } = this.state;
          let quoteData = data[0];
          quote.content = quoteData.content;
          quote.link = quoteData.link;
          quote.title = quoteData.title;

          this.setState({ quote }, () => {
            if (this.state.hasQuote === false) {
              this.setState({ hasQuote: true });
            }
          });
        } else {
          return console.error("No Quote");
        }
      });
  };

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
        <button onClick={this.getRandomQuote}>Click Here</button>
        {this.state.hasQuote === true ? this.renderQuote() : "No Quote Yet"}
      </Fragment>
    );
  }
}

export default Dermot;
