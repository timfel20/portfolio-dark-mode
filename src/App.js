import { Route, Routes } from 'react-router';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/"  element = {<Main/>} />
    </Routes>
    </div>
  );
}

export default App;
