import './App.css';
import Person from './components/Person';
import PersonCard from './components/PersonCard';

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

    </div>
  );
}

export default App;
