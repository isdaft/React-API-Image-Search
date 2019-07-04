import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash.js';
import ImageList from './imageList';
class App extends React.Component {
	state = {images: []};
	OnSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params:{ query: term, per_page: 50 }
		});
		
		this.setState({images: response.data.results});
	}
	
	render(){
		return(
			<div className="ui container" style={{marginTop: '30px'}}>
				<SearchBar onSubmit={this.OnSearchSubmit}/>
				<p>Found: {this.state.images.length} Images</p>
				<ImageList images={this.state.images}/>
			</div>
		);
	};
}

export default App;