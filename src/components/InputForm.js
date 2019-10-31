import React from "react"

import ListItem from "./ListItem"

class InputForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.pushAndReturnArray = this.pushAndReturnArray.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.item === "")  // don't let the user add an empty string
            return
        this.setState(prevState => {
            return {
                item: "",
                items: this.pushAndReturnArray(prevState.items, prevState.item)
            }
        })
        // console.log(this.state.items) TODO: this seems to be one step behind...why?
    }

    pushAndReturnArray(arr, value) {
        // push method does not return an array!!! I was having a lot of trouble with that!
        arr.push({item: value, checked: false}) // push in an object
        return arr
    }

    handleChecked(item) {
        // return the opposite of the check value
        this.setState(prevState => {
            const newItems = prevState.items.map(item => {
                if (item.value === this.item)
                    item.checked = !item.checked
                return item
            })
            return newItems
        })
    }
    
    render() {
        const listItems = this.state.items.map(item =>
            <ListItem 
                item={item.item}
                checked={item.checked}
                handleChecked={this.handleChecked}
            />)
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
