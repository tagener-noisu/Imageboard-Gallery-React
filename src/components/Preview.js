import React from "react";

export default class Preview extends React.Component {
	render() {
		const style = {backgroundImage: `url("${this.props.preview}")`};
		const onClick = () => { this.props.onClick(this.props.url); };
		return <div
			className="gallery-preview"
			style={style}
			onClick={onClick} />
	}
}
