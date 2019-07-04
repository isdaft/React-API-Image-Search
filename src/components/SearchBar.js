import React from 'react';

class SearchBar extends React.Component {
	
	state = {term: ''};

	
	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}
	render() {
		return(
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="ui field">
					<label>Image Search</label>
					<input className="userInput" 
					type="text"
					value={this.state.term} 
					onChange={e => this.setState({term: e.target.value})}/>
					<div id="wave" className="inactive">
					    <span className="dot"></span>
					    <span className="dot"></span>
					    <span className="dot"></span>
					</div>
				</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;