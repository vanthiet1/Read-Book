import ReactDOM from 'react-dom/client'
import App from './app';
import './index.css';
import DisplayContext from './src/contexts/UiContext';
import BookContext from './src/contexts/api/BookContext';
import DataUserLogin from './src/contexts/authContext/DataUserLogin';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <DataUserLogin>
        <BookContext>
            <DisplayContext>
                <Router>
                    <App />
                </Router>
            </DisplayContext>
        </BookContext>
    </DataUserLogin>

)
