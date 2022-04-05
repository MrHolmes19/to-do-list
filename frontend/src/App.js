import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Error404 from './components/Error404';
import TasksPage from './components/TasksPage';
import FoldersPage from './components/FoldersPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/:user/folders" element={<FoldersPage/>}/>
          <Route path="/:user/folders/:folder" element={<TasksPage/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </HashRouter>     
     
    </div>
  );
}

export default App;
