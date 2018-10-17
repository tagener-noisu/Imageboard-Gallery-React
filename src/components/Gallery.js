import React from "react";

function GalleryView(props) {
	return <div id="gallery-view"></div>;
}

function GalleryFooter(props) {
	return <div id="gallery-footer"></div>;
}

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {images: [], current_item: undefined};
	}

	componentDidMount() {
		const images = Array.from(document.querySelectorAll('.preview')).
			map(prev => ({preview: prev.src, url: prev.parentNode.href})).
			filter(x => x.preview && x.url);

		let current_item = undefined;
		if (images.length > 0)
			current_item = images[0];

		this.setState({images, current_item});
	}

	render() {
		console.log("Gallery", this.state);
		return <div id="gallery">
			<GalleryView item={this.state.current_item} />
			<GalleryFooter images={this.state.images} />
		</div>;
	}
}
