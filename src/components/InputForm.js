import React from "react"

import ListItem from "./ListItem"

class InputForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            items: ['Hello', 'World!']
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.setState({ items: this.state.items.push(this.state.item) })
        this.setState(prevState => {
            return {
                item: "",
                items: prevState.items.push(prevState.item)
            }
        })
        console.log(this.state.items)
    }
    
    render() {
        const listItems = this.state.items.map(item => <ListItem item={item} />)
        return (
            <div>
                {listItems}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="item"
                        value={this.state.item}
                        placeholder="Enter your todo here"
                        onChange={this.handleChange}
                    />
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default InputForm
