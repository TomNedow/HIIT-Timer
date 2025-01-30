import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Message from '/src/Components/Title';
import NavBar from '/src/Components/NavBar';
import DisplayTime from '/src/Components/DisplayTime';

function App() {
  return (
    <div>
      <NavBar />
      <Message />
      <div className='display-container'>
        <DisplayTime className="display-time" />
      </div>
    </div>
  );
}

export default App;
