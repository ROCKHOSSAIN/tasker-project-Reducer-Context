
const TaskAction = ({onAddClick,onDeleteAllClick}) => {
    return (
            <div className="flex items-center space-x-5">
                <button
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                    onClick={onAddClick}
                    >
                    Add Task
                </button>
                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                    onClick={onDeleteAllClick}>
                    Delete All
                </button>
            </div>
       
    );
};

export default TaskAction;