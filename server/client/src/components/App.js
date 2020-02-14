import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

//const Header = () => <h2>Header</h2>;
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';



class App extends Component{
	componentDidMount(){
		this.props.fetchUser();
	}
	// see return ?? that means this is a response ?
	render(){
		return (
			<div className = 'container'>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path = "/" component = {Landing}/>
						<Route exact path = '/surveys' component = {Dashboard} />
						<Route path = '/surveys/new' component = {SurveyNew} />

					</div>
				</BrowserRouter>
			</div>	

		);
	}
};

export default connect(null,actions)(App);