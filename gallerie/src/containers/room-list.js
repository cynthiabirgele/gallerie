import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { addOverlay } from "../actions/index"
import { Link } from "react-router-dom"

class RoomList extends Component {
	state = {
		activeRoom: false,
	}

	componentDidMount() {
		const activeRoom =
			this.props.rooms.filter(room => room.key === this.props.roomId)[0] || ``
		if (!this.state.activeRoom) {
			this.props.addOverlay(activeRoom)
			this.setState({
				activeRoom: true,
			})
		}
	}

	createListItems() {
		return this.props.rooms.map(room => {
			return (
				<li
					key={room.id}
					onClick={() => this.props.addOverlay(room)}
					className="room_item"
				>
					<p>
						<Link to={`/demo/${room.key}`}>{room.title}</Link>
					</p>
					{room.images && (
						<div className="room_preview-active">
							{room.images &&
								room.images.map(img => {
									return (
										<div className="room_preview" key={img.id}>
											<img
												className="room_preview-img"
												src={img.src}
												alt={img.id}
											/>
										</div>
									)
								})}
						</div>
					)}
				</li>
			)
		})
	}

	render() {
		return <div>{this.createListItems()}</div>
	}
}

function mapStateToProps(state) {
	return {
		rooms: state.rooms,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ addOverlay: addOverlay }, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps,
)(RoomList)
