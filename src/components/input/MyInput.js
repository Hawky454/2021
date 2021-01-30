import React, { Component} from 'react';


class MyInput extends Component {
    constructor(props) {
        super(props)
        

        this.state = {
            userInput: '',

        }
        
    }

    render() {
        return (
            <div>
                <input></input>
            </div>
        )
    }
   
}

export default MyInput;