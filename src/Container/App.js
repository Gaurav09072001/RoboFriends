import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
//import {robots} from './robots';
import Scroll from '../Components/Scroll';
import './app.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: '',
		}
		
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=> this.setState({robots : users}));
	}

	onSearchChange= (event) =>{
		this.setState({ searchField : event.target.value })
	}
	render(){
		const {robots,searchField} = this.state;
		const filterRobot=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return !robots.length ?
			<h1>Loading</h1> :
		  (
			<div className='tc'>
			<h1 className='f1'>RoboFriend</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<Cardlist robots={filterRobot}/>
			</Scroll>
			</div>
		  );
	}
}

export default App;

