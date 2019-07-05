import React from 'react';
import DownloadButton from './DownloadButton';
import LikeButton from './LikeButton';
import LightBoxModal from './LightBoxModal';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {spans: 0, height: 0, loaded: false, show: false};

		this.imageRef = React.createRef();

		this.hideModal = this.hideModal.bind(this);
		
	}

	componentDidMount(){
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
			//console.log(this.imageRef.current.getBoundingClientRect());
			const height = this.imageRef.current.clientHeight;
			const spans = Math.ceil(height / 1 + 10);
			this.setState({spans: spans, height: height, loaded: true});
	}
	showModal = () => {
    	this.setState({ show: true });
  	};

	hideModal = (e) => {
		e.stopPropagation();
		console.log('hideModal');
	    this.setState({ show: false });
	};


	render(){
	
		//const { isModalOpen } = this.state;
		return(
				
			<div className="image-container" 
			style={{gridRowEnd: `span ${this.state.spans}`}}
			onClick={this.showModal}>
				
					<img className="item" ref={this.imageRef} src={this.props.image.urls.small} />
				
				<div className="imageInfo" style={{height: `${this.state.height}px`}}>
					<div className="aligner-top">
							<a href={this.props.image.urls.small} download>
								<DownloadButton/>
							</a>
					</div>
					<div className={`aligner-bottom ${this.state.loaded ? "is-visible" : ""}`}>
						<LikeButton likes={this.props.image.likes} />
					</div>
				</div>

				<LightBoxModal
            	className="modal"
            	show={this.state.show}
                handleClose={this.hideModal}
                imageUrl={this.props.image.urls.regular}
                imageLikes={this.props.image.likes}
                >
                        
            	</LightBoxModal>

			</div>
			
			
			




			);
		
	}
}

export default ImageCard;