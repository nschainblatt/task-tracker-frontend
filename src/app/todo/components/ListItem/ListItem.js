import React from "react";
import './ListItem.css';
import {AiFillEdit} from 'react-icons/Ai'
import {BiSolidTrash} from 'react-icons/Bi'

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
                    <AiFillEdit size={20}/>
                </button>
                {item}
                <button value={item} onClick={()=>{deleteItem(index)}} className="deleteButton noDeco" type="button">
                    <BiSolidTrash size={20}/>
                </button> 
            </p>
        </div>

    );
}