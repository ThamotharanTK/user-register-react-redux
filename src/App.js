import logo from './logo.svg';
import './App.css';
import UserPage from './components/Page/User/UserPage';
import { Provider } from 'react-redux';
import store from './reducers/store';
function App() {
  return (
    <Provider store={store}>
        <UserPage />
    </Provider>
  );
}

export default App;
