import React from "react";

export default class ToggleButton extends React.Component {
	render() {
		const className = this.props.toggled ? "toggled" : "";
		return <div
			className={className}
			id="gallery-toggle"
			onClick={this.props.toggle} />
	}
}
