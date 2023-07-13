import React from "react";
import './ListItem.css';

export const ListItem = ({index, item, deleteItem, setIndex, editItem, progress }) => {

    const dragStarted = (e, index) => {
        console.log(item);
        console.log("Drag Has Started", index);
        e.dataTransfer.setData("toDoData", item);
        setIndex(index);
    }

    return (
        <div>
            <p id={toString(index)} className="item" 
                draggable 
                onDragStart={(e)=>dragStarted(e,index)}
            >
                <button className="editButton" onClick={()=>editItem(index, progress)}>
                    edit
                    {/* <box-icon color="rgb(188, 187, 187)" type='solid' name='edit-alt'></box-icon> */}
                </button>
                {item}
                <button value={item} onClick={()=>{deleteItem(index)}} className="deleteButton noDeco" type="button">
                    delete
                    {/* <box-icon color="rgb(188, 187, 187)" name='trash' type='solid' ></box-icon> */}
                </button> 
            </p>
        </div>

    );
}