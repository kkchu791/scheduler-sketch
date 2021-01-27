import { Main } from './components';
import './App.css';
import { AuthProvider } from './context';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
