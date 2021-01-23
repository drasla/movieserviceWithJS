import React from "react";

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        console.log("add");
    }
    minus = () => {
        console.log("minus");
    }
    render() {
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onclick={this.add}>Add</button>
                <button onclick={this.minus}>Minus</button>
            </div>
        );
    };
}

export default App;
