import React from "react"
import './App.css'

export default class App extends React.Component {
    state = {
        character: {}
    }
    
    /**
     * Challenge:
     * 
     * Save the Star Wars character object in state! Then,
     * display the `name` property of the character on the
     * screen.
     */
    
    componentDidMount() {  // this will run after the component mounts the first time. It's advisable to use state to ensure that it doesn't run twice. This is similar to useEffect()
        console.log("componentDidMount")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => this.setState(prevState => {
                return {
                    character: data
                }
            }))
    }
    
    render() {
        console.log("render")
        return (
            <h1>Hello, {this.state.character.name}</h1>
        )
    }
}
