import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {spans: 0, height: 0, showDesc: ''};

		this.imageRef = React.createRef();
		
	}
	componentDidMount(){
		this.imageRef.current.addEventListener('load', this.setSpans);
		//this.imageRef.current.addEventListener('load', this.setDescription);
		//this.imageRef.current.addEventListener('load', this.setIcons);

		
		

	}
	setSpans = () => {
			//console.log(this.imageRef.current.getBoundingClientRect());
			//const rectHeight = this.imageRef.current.getBoundingClientRect().height.toFixed(6);
			//console.log(rectHeight);
			const height = this.imageRef.current.clientHeight;
			//console.log(height);
			const spans = Math.ceil(height / 1 + 10);

			this.setState({spans: spans, height: height});
	}
	setDescription = props => {
		
		console.log('setDesc');
		console.log(this.props);
		const description = this.props.image.description;
		this.setState({showDesc: description});
	}
	setIcons = () => {

	}


	render(){
	
		
		return(
			
			<div className="image-container" style={{gridRowEnd: `span ${this.state.spans}`}}>
				
					<img ref={this.imageRef} src={this.props.image.urls.small} />
				
				<div className="imageInfo" style={{height: `${this.state.height}px`}}>
					<div className="aligner-top">icon</div>
					<div className="aligner-bottom">
					<p></p></div>
				</div>

			</div>
			
			);
		
	}
}

export default ImageCard;