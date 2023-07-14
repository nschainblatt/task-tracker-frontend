export const DoneItem = ({ index, item, deleteItem, editItem, progress }) => {

    return (
        <div>
            <p id={toString(index)} className="item" 
            >
                <button className="editButton" onClick={()=>editItem(index, progress)}>
                    &gt;
                </button>
                {item}
                <button value={item} onClick={()=>{deleteItem(index)}} className="deleteButton noDeco" type="button">
                    &lt;
                </button> 
            </p>
        </div>

    );
}