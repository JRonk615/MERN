import './App.css';
import Person from './components/Person';
import PersonCard from './components/PersonCard';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Person />
      <PersonCard 
      firstName = {'Jordan'}
      lastName = {'Ronk'}
      age = {28}
      hairColor = {'black'}
      />
            <PersonCard 
      firstName = {'Kaitlin'}
      lastName = {'Ronk'}
      age = {25}
      hairColor = {'blonde'}
      />
      <PersonCard 
      firstName = {'Lacey'}
      lastName = {'Ronk'}
      age = {1}
      hairColor = {'brown'}
      />
    <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    <Counter/>
    </div>
  );
}

export default App;
