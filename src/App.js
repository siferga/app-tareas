import './App.css';
import changelogo from  './images/changelogo.jpg'

function App() {
  return (
    <div className='app-tareas'>
      <div className='change-logo-container'>
        <img
          src={changelogo}
          className='change-logo'
        />
      </div>
      <div className='main-task-list'>
        <h1>Mis Tareas</h1>
    
      </div>
    </div>
  );
}

export default App;
