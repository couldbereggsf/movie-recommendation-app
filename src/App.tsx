import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('✅ App mounted successfully');
  }, []);

  return <RouterProvider router={router} />;
}

export default App;