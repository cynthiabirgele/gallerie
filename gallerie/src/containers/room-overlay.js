import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { closeOverlay } from "../actions/index"
import { Link } from "react-router-dom"
import WaterScene from "../components/scenes/WaterScene"
import ArtNouveau from "../components/scenes/ArtNouveau"

class ActiveRoom extends Component {
	state = {
		showInfo: false,
		imgIndex: 1,
		roomOpen: false,
		interval: 0,
	}

	showDescription() {
		if (!this.state.showInfo) {
			this.setState({
				showInfo: true,
			})
		} else {
			this.setState({
				showInfo: false,
			})
		}
	}
	//NEVER EVER USE TIMEOUTS ITs LOOPING HEADACHE INFINITELY
	// getItems() {
	// 		this.timer = 0
	// 		for (var i = 2; i <= num; i++) {
	// 			(function(index) {
	//         timer = setTimeout(() => {
	//              console.log(index)
	//              this.setState({
	//                imgIndex: index,
	//              })
	//            }, i * 6000 )
	// 			}.bind(this)(i))
	//     }
	// }

	render() {
		if (!this.props.room) {
			return <h2 className="select">Select a room...</h2>
		}
		const findElement =
			(this.props.room.component === `Water` && (
				<WaterScene
					room={this.props.room.component}
					roomOpen={this.props.room}
				/>
			)) ||
			(this.props.room.component === `Art` && (
				<ArtNouveau
					room={this.props.room.component}
					layers={this.props.room.layers}
				/>
			))
		const hasDescription = this.props.room.description.length > 0
		return (
			<div className="room">
				<div className="room_nav">
					<h2 className="room_nav-title">
						{this.props.room.title}
						{hasDescription && (
							<div
								className="info"
								onClick={() => this.showDescription(this.props.room.desription)}
							>
								<img
									src="../../images/info.png"
									className="info-img"
									alt="info-img"
								/>
							</div>
						)}
					</h2>
					<div
						className="close"
						onClick={() => this.props.closeOverlay(this.props.room)}
					>
						<Link to="/demo">
							<img
								src="../../images/close.png"
								className="close-img"
								alt="close-img"
							/>
						</Link>
					</div>
				</div>
				{this.state.showInfo && (
					<div className="room_nav-description">
						<p className="room_nav-description-text">
							{this.props.room.description}
						</p>
					</div>
				)}
				{findElement}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		room: state.activeRoom,
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ closeOverlay: closeOverlay }, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps,
)(ActiveRoom)
