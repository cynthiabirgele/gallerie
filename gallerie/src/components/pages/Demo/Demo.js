import React, { Component } from "react"
import RoomList from "../../../containers/room-list"
import ActiveRoom from "../../../containers/room-overlay"

import "./demo.css"
class Demo extends Component {
	render() {
		const pathname = this.props.location.pathname || ``
		const roomId = pathname.split(`/demo`) || ``
		const room =
			roomId
				.filter(id => id !== "")
				.toString()
				.substr(1) || ``
		return (
			<div className="content">
				<h2 className="header-title">
					Demo<span className="demo-title">Exhibitions</span>
				</h2>
				<div className="content-body">
					<ActiveRoom />
					<RoomList roomId={room} />
				</div>
			</div>
		)
	}
}

export default Demo
