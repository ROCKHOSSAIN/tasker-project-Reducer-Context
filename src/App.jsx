
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import TaskBoard from './Task/TaskBoard'
// import { getAllTask } from './Task/AllTask.js';
import { useReducer, useState } from 'react';
import { TasksContext } from './Task/alltask/index.js';
import { initialState, taskReducer } from './Task/reducer/TaskReducer.js';
// import { TasksContext } from './Task/alltask';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [state, dispatch] = useReducer(taskReducer,initialState)


  return (
    <>

      <TasksContext.Provider value={{state,dispatch}}>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <HeroSection />
          <TaskBoard />
          <ToastContainer/>

        </div>
        <Footer />
      </TasksContext.Provider>

    </>
  )
}

export default App
