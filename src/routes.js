import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Provider } from './context/context';


function MainRoutes() {
  return (
    <Provider>
    <Routes>
         <Route path="/" element={<Main />} />
</Routes>
    </Provider>

  );
}

export default MainRoutes;