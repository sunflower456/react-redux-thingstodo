import React from 'react';

export default class ContactDetail extends React.Component {
    state = {
        isEdit : false,
        name : '',
        phone : ''
    }

    handleToggle = () => {
        if(!this.state.isEdit) {
            this.setState({
                name : this.props.contact.name,
                phone : this.props.contact.phone
            })
        }
        this.setState({
            isEdit : !this.state.isEdit
        });
    }

    handleEdit = () => {
        this.props.onEdit(this.state.name, this.state.phone);
    }
    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }
    render(){
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        )
        const edit = (
            <div>
                <p><input 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        value={this.state.name}  
                        onChange={this.handleChange}  
                    >
                    </input></p>
                <p><input
                        type="text" 
                        name="phone" 
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange} 
                    >
                    </input></p>
            </div>
        )
        const view = this.state.isEdit ? edit : details;
        const empty = (
            <div>
            </div>
        )
        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : empty}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        )
    }
}

ContactDetail.defaultProps = {
    contact : {
        name : '',
        phone : ''
    },
    onRemove : () => {console.error('onRemove not defined');}
}