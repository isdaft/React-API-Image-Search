import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const ImageList = props => {
	//console.log(props.images);
	const images = props.images.map((image) => {
		return(
		 <ImageCard key={image.id} image={image}/>
		 
		 );

	})
	return( 

		<div className="image-grid">{images}</div>
		);
}

export default ImageList;