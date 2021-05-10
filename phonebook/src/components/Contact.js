import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

export default class Contact extends React.Component {
    state = {
        selectedKey : -1,
        keyword : '',
        contact : [
            {
                name : 'Albert',
                phone : '010-0000-0001'
            },
            {
                name : 'Betty',
                phone : '010-0000-0002'
            },
            {
                name : 'Charlie',
                phone : '010-0000-0003'
            },
            {
                name : 'David',
                phone : '010-0000-0004'
            }
        ]
    }

    onChange = (e) => {
        this.setState({
            keyword : e.target.value
        })
    }

    handleClick = (key) => {
        this.setState({
            selectedKey : key
        })
    }

    handleCreate = (contact) => {
        this.setState({
            contact : update(this.state.contact, {
                $push:[contact]
            })
        })
    }

    handleRemove = () => {
        if(this.state.selectedKey <0){
            return;
        }
        this.setState({
            contact : update(this.state.contact, {
                $splice : [[this.state.selectedKey, 1]]
            }),
            selectedKey : -1
        });
    }

    handleEdit = (name, phone) => {
        this.setState({
            contact : update(this.state.contact, {
                [this.state.selectedKey] : {
                    name: {$set:name},
                    phone: {$set:phone}
                }
            })
        })
    }

    render(){
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1
            })
            return data.map((contact, i) => {
                return (
                    <ContactInfo 
                        contact={contact} 
                        key={i} 
                        onClick={()=>this.handleClick(i)}
                    />
                )
            });
        }
        return (
            <div>
                <h1>Contact</h1>
                <input
                    value={this.state.keyword}
                    onChange={this.onChange}
                />
                {mapToComponent(this.state.contact)}
                <ContactDetail 
                    contact={this.state.contact[this.state.selectedKey]} 
                    isSelected={this.state.selectedKey != -1}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                    onChange={this.onChange}
                />
                <ContactCreate 
                    onCreate = {this.handleCreate}
                />
            </div>
        )
    }
}