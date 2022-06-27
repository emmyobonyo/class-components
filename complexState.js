import React from "react"
import './App.css'

/**
 * Challenge: update the function component to a class component.
 * 
 * Bonus: you can use class fields and arrow function methods
 * to avoid needing to add a constructor method 😄
 * 
 * Tip: Move the `let starIcon = ...` line into the `render` method
 * before the `return`, since that is display logic
 */
export default class App extends React.Component {
    
    state = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    }
    
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorite: !prevState.isFavorite
            }
        })
    }

    componentDidMount() {
      console.log("componentDidMount")
      fetch("https://swapi.dev/api/people/1")
          .then(res => res.json())
          .then(data => {
              const root = document.getElementById('root')
              const h1 = document.createElement('h1')
              h1.innerHTML = data.name
              root.appendChild(h1)
          })
  }
    
    render() {
      console.log('render')
        let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png"
        return (
            <main>
                <article className="card">
                    <img src="./images/user.png" className="card--image" />
                    <div className="card--info">
                        <img 
                            src={`../images/${starIcon}`} 
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.firstName} {this.state.lastName}
                        </h2>
                        <p className="card--contact">{this.state.phone}</p>
                        <p className="card--contact">{this.state.email}</p>
                    </div>
                    
                </article>
            </main>
        )
    }
}
