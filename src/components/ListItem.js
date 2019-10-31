import React from "react"

function ListItem(props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.tick}
                onChange={() => props.handleChecked(props.item)}
            />
            <p>{props.item}</p>
        </div>
    )
}

export default ListItem
