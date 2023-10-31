import { ToastContainer } from 'react-toastify';

import AppRouter from '@routes/AppRouter';
import '@styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <AppRouter />
            <ToastContainer />
        </>
    );
}

export default App;
