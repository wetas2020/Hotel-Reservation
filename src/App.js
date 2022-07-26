import './App.css';

import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
    return (
        <div>
            <Home />
            <Room />
            <SingleRoom />
            <Error />
        </div>
    );
}

export default App;
