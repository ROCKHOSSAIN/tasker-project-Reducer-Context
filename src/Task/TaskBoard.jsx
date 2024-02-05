import { useContext, useState } from 'react';
import SearchTask from './SearchTask';
import TaskAction from './TaskAction';
import TaskList from './TaskList';
import AddTaskModel from './AddTaskModel';
import { TasksContext } from './alltask/index.js';
import NoTasksFound from '../NoTaskFound.jsx';
// import { getAllTask } from './AllTask.js';

const TaskBoard = () => {

    // const { AllTask, SetAllTask } = useContext(TasksContext)
    // const Tasks = getAllTask()
    // const [AllTask, SetAllTask] = useState(Tasks)

    const { state, dispatch } = useContext(TasksContext)
    console.log(state.taskData)

    console.log(state)
    const [ShowAddModal, setShowAddModal] = useState(false)
    const [EditData, setEditData] = useState(null)

    // const [isFavorite,SetFavorite]= useState(false)
    const handleDeleteAllClick = () => {
        // AllTask.length = 0;
        // SetAllTask([...AllTask])
        const isConfirmed = window.confirm('Are you sure you want to delete this task?');
        if (isConfirmed) {
            // SetAllTask(DeleteData)
            dispatch({ type: 'DELETE_ALL_TASKS' });

        }



    }
    const handleFavourite = (id) => {
        dispatch({
            type: 'TOGGLE_FAVORITE',
            payload: { id }
        });
        // SetAllTask(
        //     AllTask.map((task) => {
        //         if (task.id === id) {
        //             return { ...task, isFavorite: !task.isFavorite }
        //         }
        //         else {
        //             return task
        //         }
        //     })
        // )

    }
    const handleEditTask = (task) => {
        setEditData(task)
        setShowAddModal(true)
    }
    const handleDeleteTask = (id) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this task?');
        // const DeleteData = AllTask.filter((task) => (task.id !== id))
        console.log(isConfirmed)
        if (isConfirmed) {
            // SetAllTask(DeleteData)
            dispatch({
                type: 'REMOVE_TASK',
                payload: { id }
            });
        }
    }
    const handleClose = () => {
        setShowAddModal(false)
        setEditData(null)

    }
    const handleSaveTask = (newtask, isAdd) => {
        if (isAdd) {
            dispatch({
                type: 'NEW_ADD_TASK',
                payload: newtask
            });
            // SetAllTask([...AllTask,newtask])
            handleClose();

        }
        else {
            dispatch({
                type: 'EDIT_TASK',
                payload: newtask
            });
            // SetAllTask(
            // AllTask.map((task)=>{
            //     if(task.id===newtask.id){
            //         console.log(task.id===newtask.id)
            //         return newtask
            //     }
            //     return task
            // })
            // )
            handleClose();


        }
    }
    return (
        <div>
            {
                ShowAddModal &&
                (
                    <AddTaskModel onSave={handleSaveTask} EditData={EditData} onCloseClick={handleClose} />
                )
            }
            <div className="container mx-auto my-20 rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                <div className="mb-14 items-center justify-between sm:flex">
                    <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                    <div className="flex items-center space-x-5">
                        {/* SEARCHING WORK  */}
                        <SearchTask />
                        {/* ADD DELETE WORK  */}
                        <TaskAction
                            onDeleteAllClick={handleDeleteAllClick}
                            onAddClick={() => setShowAddModal(true)} />

                    </div>
                </div>

                {
                    state.taskData.length === 0 ?
                        <NoTasksFound /> :
                        <TaskList
                            onDelete={handleDeleteTask}
                            onEdit={handleEditTask}
                            onFav={handleFavourite}
                            AllTask={state.taskData} />}
            </div>

        </div>
    );
};

export default TaskBoard;