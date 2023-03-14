import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/out/router/MainRouter';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './components/Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
     <Toaster/>
     </Provider>
    </div>
  );
}

export default App;
