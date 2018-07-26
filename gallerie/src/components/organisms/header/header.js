import "./header.css"
var React = require("react")

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img
					src="../../images/header.png"
					className="header-img"
					alt="header-img"
				/>
			</div>
		)
	}
}
