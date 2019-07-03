import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
    state = { displayBio: false};

        toggleDisplayBio = () => {
            this.setState({ displayBio: !this.state.displayBio});
        }
    

    render() {
        return (
            <div>
                <h1> Hello!</h1>
                <p> My name is Fizza. I am a MSCS student.</p>
                <p>I am always looking forward to learning new languages and working on projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p>I live in Huntington Beach, CA.</p>
                        <p>My favorite language is JavaScript.</p>
                        <p>Besides coding, I also love being active and eating ramen!</p>
                        <button onClick = {this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div> 
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
            </div>
        )
    }

}

export default App;
