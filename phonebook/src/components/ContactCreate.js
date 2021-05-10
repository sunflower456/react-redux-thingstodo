import React from 'react';

export default class ContactCreate extends React.Component {
    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleClick = () => {
        const contact = {
            name : this.state.name,
            phone : this.state.phone
        };
        this.props.onCreate(contact);
        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        value={this.state.name}  
                        onChange={this.handleChange}  
                    >
                    </input>
                    <input
                        type="text" 
                        name="phone" 
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange} 
                    >
                    </input>
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}
