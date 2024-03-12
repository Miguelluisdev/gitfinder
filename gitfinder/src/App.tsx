
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen rounded-md bg-sky-800">
      <h1 className="text-3xl font-bold mb-8">GitFinder</h1>
      <Outlet />
    </div>
  );
}

export default App;
