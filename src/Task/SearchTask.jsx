import  { useContext, useState } from 'react';
import { TasksContext } from '../Task/alltask/index.js';
const SearchTask = () => {
    const { state, dispatch} = useContext(TasksContext)

    // const { AllTask, SetAllTask } = useContext(TasksContext);
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchItem.length === 0){
            dispatch({ type: 'NO_DATA' });
        }else{
            const filtered = state.taskData.filter((task) =>
            task.title.toLowerCase().includes(searchItem.toLowerCase())
            );
            dispatch({ type: 'SET_FILTERED_TASKS', payload: filtered });
        } 
        // e.preventDefault();
        // if(searchItem.length === 0){
        //     SetAllTask([...AllTask]);
        // }else{
        //     const filtered = AllTask.filter((task) =>
        //     task.title.toLowerCase().includes(searchItem.toLowerCase())
        //     );
        //     console.log(filtered);
        //     SetAllTask([...filtered]);
        // } 
    };

    return (
        <div>
            <form>
                <div className="flex">
                    <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                            placeholder="Search Task"
                            required
                            onChange={(e) => setSearchItem(e.target.value)}
                            
                        />
                        <button
                            onClick={handleSearch}
                            type="submit"
                            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                        >
                            <svg
                                className="h-4 w-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchTask;
