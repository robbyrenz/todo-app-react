import React from "react"

function ListItem(props) {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={() => props.handleChecked(props.item)}
            />
            {props.item}
        </div>
    )
}

export default ListItem
