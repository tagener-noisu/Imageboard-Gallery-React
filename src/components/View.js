import React from "react";

function Image(props) {
	const style = {backgroundImage: `url("${props.url}")`};
	return <div id="gallery-view" style={style} />;
}

function Video(props) {
	return <div id="gallery-view">
		<video src={props.url} autoPlay="1" controls="1" loop="1" />
	</div>;
}

export default class View extends React.Component {
	render() {
		const {url} = this.props;
		if (url && url.match(/\.(mp4|webm)$/))
			return <Video url={url} />
		else
			return <Image url={url} />
	}
}
