import React from "react";
import Preview from "./Preview"

export default class Footer extends React.Component {
	render() {
		return <div id="gallery-footer">{
			this.props.images.map(i => (
				<Preview preview={i.preview} url={i.url} />
			))
		}</div>;
	}
}
