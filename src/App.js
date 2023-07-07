import React from 'react';
import './App.scss';
import quotes from './quotes.js';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    let r = Math.floor(Math.random() * quotes.length);
    this.state = {
      randomNumber: r,
      quote: quotes[r].quote,
      author: quotes[r].author,      
    }
    this.handleClick = this.handleClick.bind(this);

  };  

  componentDidMount() {
    this.generateRandomQuote();
  }

  generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];
    this.setState({
      randomNumber: randomIndex,
      quote: quote,
      author: author,
    });
  }

  handleClick() {
    this.generateRandomQuote();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
    
          <p id = "quote">
            "{this.state.quote}"
          </p>
          <p id = "author">
            - {this.state.author}
          </p>

          <button 
            id = "new-quote" 
            onClick = {this.handleClick}>
              New quote
          </button>

        </header>
      </div>
    );
  }
}

function App() {
  return (
    <RandomQuoteMachine />
  );
}

export default App;
