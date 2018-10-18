import React from "react";

export default class View extends React.Component {
	render() {
		const style = {backgroundImage: `url("${this.props.url}")`};
		return <div id="gallery-view" style={style} ></div>;
	}
}
