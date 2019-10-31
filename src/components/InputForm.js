import React from "react"

import ListItem from "./ListItem"

class InputForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            items: []
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    render() {
        const listItems = this.state.items.map(item => <ListItem item={item} />)
        return (
            <div>
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
