import { getAllTask } from '../AllTask.js';
const initialTask = getAllTask()
const initialState = {
    taskData: initialTask,
  };
  
  const taskReducer = (state, action) => {
    switch (action.type) {
      // case 'ADD_TASK':
      //   return {
      //     taskData: [...state.taskData, action.payload],
      //   };
  
      case 'DELETE_ALL_TASKS':
        return {
          taskData: [],
        };
  
      case 'TOGGLE_FAVORITE':
        return {
          taskData: state.taskData.map((task) =>
            task.id === action.payload.id
              ? { ...task, isFavorite: !task.isFavorite }
              : task
          ),
        };
  
      case 'NEW_ADD_TASK':
        return {
          taskData: [...state.taskData, action.payload],
        };
  
      case 'EDIT_TASK':
        return {
          taskData: state.taskData.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        };
  
      case 'REMOVE_TASK':
        return {
          taskData: state.taskData.filter((item) => item.id !== action.payload.id),
        };
        case 'SET_FILTERED_TASKS':
          return {
            taskData: action.payload,
            
          };
        case 'NO_DATA':
          return {
            taskData: initialTask,
          };
  
      default:
        return state;
    }
  };
  
  export { initialState, taskReducer };
  