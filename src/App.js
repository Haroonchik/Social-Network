import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navigaition from './components/Navigation';


const App = () => {

	return (
		<div className='app-wrapper'>

			<Header />
			<Navigaition />
			<Profile />

		</div>
	);
}

export default App;
