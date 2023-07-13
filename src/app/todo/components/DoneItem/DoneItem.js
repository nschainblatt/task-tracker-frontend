import {AiFillEdit} from 'react-icons/Ai'
import {BiSolidTrash} from 'react-icons/Bi'

export const DoneItem = ({ index, item, deleteItem, editItem, progress }) => {

    return (
        <div>
            <p id={toString(index)} className="item" 
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