import React from "react";


/* 1. JSX */
// JSX Multi Line //
const bookGenre = ( 
    <ul>
        <li> Fantasy </li> 
        <li> Drama </li> 
        <li> Horror </li> 
        <li> Thriller </li> 
    </ul>
);

function App() {
    // JSX Single Line //
    const geek = <h1 style={{ color: "teal" }}>Raissa Desyandita T.</h1>

    return ( 
      <div className="listing">
        <h5>Welcome, { geek }</h5> 
        <p>Here is our book genre 's that you can read:</p> 
        { bookGenre } 
      </div>
    );
}



/* 2. State */
class App extends React.Component {
    constructor() {
        super();
        // Create state object //
        this.state = {
            title: "The Host",
            author: "Stephenie Meyer",
            year: 2008,
            pages: 619,
            price: 110000
        };
    }

    changingBook = () => {
        // Change state object //
        this.setState({
            title: "The Selection Series",
            author: "Kiera Cass",
            year: 2015,
            pages: 358,
            price: 85000
        });
    }

    render() {
        return (
            <div>
                <h4>My Booklist:</h4>
                <h5>Title: {this.state.title}</h5>
                <h5>Author: {this.state.author}</h5>
                <h5>Released Year: {this.state.year}</h5>
                <h5>Total Pages: {this.state.pages}</h5>
                <h5>IDR {this.state.price}</h5>
                <button onClick={this.changingBook}>Next</button>
            </div>
        )
    }
}


export default App;