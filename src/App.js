import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { UtilityContext } from './contexts/UtilityProvider';
import { router } from './Routes/Routes';




function App() {
  const { mode } = useContext(UtilityContext);
  return (
    <div className={`App overflow-y-scroll h-screen ${mode ? undefined : 'bg-gray-600'}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
