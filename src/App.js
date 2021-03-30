import Contact from "./components/Contact.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact avatar="https://picsum.photos/id/237/200/300" name="Blackdog" isOnline={true}> 
      </Contact>
    </div>
  );
}

export default App;
