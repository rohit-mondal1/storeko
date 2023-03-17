import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/out/router/MainRouter';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App max-w-[1450px] mx-auto ">
      
     <RouterProvider router={router}></RouterProvider>
     <Toaster/>
     
    </div>
  );
}

export default App;
