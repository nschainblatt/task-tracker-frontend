import { useState } from "react";
import './Content.css';
import { ListItem } from "../ListItem/ListItem";
import { DoneItem } from "../DoneItem/DoneItem";
import Scroll from "../Scroll/Scroll";


export const Content = ({ list, listData, setData, doneData, setDoneData, routing, setEmail, setPassword, saveData }) => {
    const [inputText, setInputText] = useState('');

    const [index, setIndex] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const deleteItem = (index) => {
        const newList = listData.filter((item)=>item);
        newList.splice(index, 1);
        listData.splice(0, listData.length, ...newList);
        setData(list, listData);
    }

    const deleteDoneItem = (index) => {
        const newList = doneData.filter((item)=>item);
        newList.splice(index, 1);
        doneData.splice(0, doneData.length, ...newList);
        setDoneData(list, doneData);
    }

    const addItem = (e) => {
        e.preventDefault();
        if (inputText !== '') {
            listData.push(inputText);
            document.querySelector('#addItems').value = '';
            setInputText('');
            setData(list, listData);
        }
    }

    const addItemAfterKeyDown = (event) => {
        if (event.keyCode === 13) {
            addItem(event);
        }
    }

    const showHelp = () => {
        const help = document.querySelector('.help-info');
        help.classList.toggle('hidden');
    }

    const draggingOver = (e) => {
        e.preventDefault();
        console.log("Dragging Over Now");
    }

    const dragDropped = (e) => {
        console.log("Dropped");
        let transferedTodoId = e.dataTransfer.getData('toDoData');
        console.log(transferedTodoId);
        doneData.push(transferedTodoId);
        setDoneData(doneData);
        deleteItem(index);
    }

    const editItem = (index, progress) => {
        const itemChange = prompt("Change To: ");
        if (itemChange === null) {
            return
        }
        if (progress === "notdone") {
            listData[index] = itemChange;
            setData(list, listData);
        } else {
            doneData[index] = itemChange;
            setDoneData(list, doneData);
        }
    }

    const logout = () => {
        setEmail('');
        setPassword('');
        setData('List #1', []);
        setData('List #2', []);
        setData('List #3', []);

        setDoneData('List #1', []);
        setDoneData('List #2', []);
        setDoneData('List #3', []);

        routing('signin');
    }

    return (
        <div className="content-container">
            <div className="header grid-top">
                    <h1>{list}</h1>
            </div>
            <div className="listContent grid-bottom-left">
                    <h2>To Do:</h2>
                    <div className="listItems ">
                        <Scroll>
                            <div className="notDone">
                                <h2>Tasks</h2>
                                {listData.map((item, index) => {
                                    return (
                                        <ListItem 
                                            key={index} 
                                            list={list} 
                                            item={item} 
                                            index={index} 
                                            deleteItem={deleteItem}
                                            setIndex={setIndex}
                                            editItem={editItem}
                                            progress={"notdone"}
                                        />
                                    );
                                })}
                            </div>
                        </Scroll>
                        <Scroll>
                            <div className="isDone" onDragOver={(e)=>draggingOver(e)} onDrop={(e)=>dragDropped(e)}> 
                                <h2>Completed Tasks</h2>
                                {doneData.map((item, index) => {
                                    return (
                                        <DoneItem 
                                            key={index} 
                                            list={list} 
                                            item={item} 
                                            index={index} 
                                            deleteItem={deleteDoneItem}
                                            editItem={editItem}
                                            progress={"done"}
                                        />
                                    );
                                })}
                            </div>
                        </Scroll>
                    </div>
                    <div className="addItems">
                            <input onKeyDown={addItemAfterKeyDown} onChange={handleChange} placeholder="What needs to get done today?" type="text" id="addItems"/>
                            <br/>
                            <div className="addSaveButtons">
                                <button onClick={addItem} className="addButton" type="button">Add Item</button>
                                <button onClick={saveData} className="addButton save" type="button">Save</button>
                                <button className="addButton" onClick={logout}>&nbsp;Logout&nbsp;</button>
                            </div>
                    </div>
            </div>
            <div className="grid-bottom-right">
                <div className="help-info hidden">
                    <h1>?</h1>
                    <p>Welcome</p>
                    <br />
                    <p>Drag to complete</p>
                    <br />
                    <p> &gt; to edit </p>
                    <p> &lt; to delete</p>
                </div>
                <button className="help-button" type="button" onClick={showHelp}>
                    <p>?</p>
                </button>
            </div>
        </div>
    );
}