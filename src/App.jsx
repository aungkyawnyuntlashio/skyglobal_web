import './App.css';

import MainLayout from './page/components/MainLayout';
import HomePage from './page/HomePage';
import PrivacyPolicy from './page/PrivacyPolicy';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Route>
    )
)

function App() {
    return (
        <div className='h-screen w-screen'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;