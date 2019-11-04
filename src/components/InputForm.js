import React from "react"

import ListItem from "./ListItem"

class InputForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            items: [],
            id: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.pushAndReturnArray = this.pushAndReturnArray.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
        this.incrementId = this.incrementId.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.item === "")
            return // don't let the user add an empty string
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
        arr.push({item: value, tick: false, id: this.state.id}) // push in an object
        this.incrementId()
        return arr
    }

    incrementId() {
        this.setState(prevState => {
            return {
                id: prevState.id + 1
            }
        })
    }

    // the below function is not working!!!
    // handleChecked(item) {
    //     // return the opposite of the check value
    //     this.setState(prevState => {
    //         const newItems = prevState.items.map(item => {
    //             if (item.item === this.item) // if the value of checkbox match to what user was clicking... TODO: something is wrong here in this particular line
    //                 item.tick = !item.tick
    //             return item
    //         })
    //         return {
    //             items: newItems
    //         }
    //     })
    // }

    handleChecked(id) {
        this.setState(prevState => {
            const newItems = this.state.items.map(item => {
                if (item.id === id)
                    item.tick = !item.tick
                return item
            })
            return {
                items: newItems
            }
        })
    }
    
    render() {
        const listItems = this.state.items.map(item =>
            <ListItem 
                item={item}
                // checked={item.tick}
                // tick={item.tick}
                handleChecked={this.handleChecked}
                key={item.id}
            />)
        return (
            <div className="notepad">
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
