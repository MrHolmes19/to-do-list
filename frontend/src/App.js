import './App.css';
//import FolderList from './components/FolderList';
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
          {/* <Route path="/folders/:user" element={<FolderList/>}/> */}
          {/* <Route path="/" element={<TasksPage/>}/>  */}
          {/* <Route path="/" element={<FoldersPage/>}/>  */}
          {/* <Route path="/folders/:userID/:foldername" element={<FolderList/>}/> */}
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </HashRouter>     
     
    </div>
  );
}

export default App;
