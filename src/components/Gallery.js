import React from "react";
import View from "./View"
import Footer from "./Footer"

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
			<View item={this.state.current_item} />
			<Footer images={this.state.images} />
		</div>;
	}
}
