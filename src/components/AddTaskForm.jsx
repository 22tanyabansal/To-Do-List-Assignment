const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
    <>
        {/* Add Task */}
        <div className="row">
        <div className="col max-w-7xl max-width: 80rem ml-24 margin-left: 6rem mr-1 margin-right: 0.25rem">
            <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg "/>
        </div>
        <div className="col-auto">
            <button
            onClick={addTask}
            className="btn btn-lg btn-dark mr-32 margin-right: 8rem">Add Task</button>
        </div>
        </div>
        <br />
    </>
    )
}
export default AddTaskForm;
