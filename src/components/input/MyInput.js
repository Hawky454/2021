import React, { Component} from 'react';


class MyInput extends Component {
    constructor(props) {
        super(props)
        

        this.state = {
            userInput: '',

        }
        console.log('react version: ', React.version);
    }

    handleInput = e => {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    className='input'
                    placeholder='type away'
                    value={this.state.userInput}
                    onChange={this.handleInput}
                />
            </div>
        )
    }
   
}

export default MyInput;