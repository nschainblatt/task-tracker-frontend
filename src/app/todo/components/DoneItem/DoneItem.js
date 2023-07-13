export const DoneItem = ({ index, item, deleteItem, editItem, progress }) => {

    return (
        <div>
            <p id={toString(index)} className="item" 
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