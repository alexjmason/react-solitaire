import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Board from './components/Board'
import { cards } from './cards'
// import CardImage from './src/assets/images/9D.png'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>
					Solitaire
				</h1>
			</header>
			<div className="App-content">
				<Board></Board>
			</div>
		</div>
	);
}

export default App;
