import React from 'react';
import './App.scss';
import quotes from './quotes.js';
import COLORS_ARRAY from './colors.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter  } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
      quote: '',
      author: '',
      color: null,      
    }
    this.handleClick = this.handleClick.bind(this);

  };  

  componentDidMount() {
    this.generateRandomQuote();
  }

  generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = Math.floor(Math.random() * COLORS_ARRAY.length);
    const { quote, author } = quotes[randomIndex];
    const selectedColor = COLORS_ARRAY[randomColor];
    this.setState({
      randomNumber: randomIndex,
      quote: quote,
      author: author,
      color: selectedColor,
    });
  }

  handleClick() {
    this.generateRandomQuote();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      
        <body className = "App-body" style ={{backgroundColor: this.state.color}}>
          <div id = "quote-box" style = {{color: this.state.color}}>            
            <p id = "text">
              <FontAwesomeIcon icon = { faQuoteLeft } />
              {` ${this.state.quote} `}
              <FontAwesomeIcon icon = { faQuoteRight } />
            </p>
            <p id = "author">
              - {this.state.author}
            </p>

            <div className = "inferiorBar">
              <a 
                id = "tweet-quote" 
                href = {`https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`} 
                target = "_blank" 
                rel="noreferrer"
                className = "button"
                style = {{backgroundColor: this.state.color}} >
                  <FontAwesomeIcon icon = {faTwitter} />
              </a>

              <button 
                id = "new-quote" 
                onClick = {this.handleClick}
                style = {{backgroundColor: this.state.color}}>
                  New quote
              </button>         
            </div>

          </div>
        </body>        
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
