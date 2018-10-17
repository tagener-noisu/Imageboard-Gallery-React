import React from "react";

export default class Preview extends React.Component {
	render() {
		const style = {backgroundImage: `url("${this.props.preview}")`};
		return <div className="gallery-preview" style={style} >
		</div>;
	}
}
