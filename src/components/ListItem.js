import React from "react"

function ListItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.tick}
                onChange={() => props.handleChecked(props.item.id)}
            />
            <p style={props.item.tick ? completedStyle : null}>{props.item.item}</p>
            {/* <p style={completedStyle}>{props.item}</p> */}
        </div>
    )
}

export default ListItem
