import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { closeOverlay } from "../actions/index"
import { Link } from "react-router-dom"
import WaterScene from "../components/scenes/Water"

class ActiveRoom extends Component {
	state = {
		showInfo: false,
		imgIndex: 1,
		roomOpen: false,
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

	getItems(state = this.state) {
		var counter = 0

		var timer = setInterval(function() {
			console.log("image nr " + counter + "room")
			console.log(state.roomOpen)

			if (counter >= 7 || !state.roomOpen) {
				clearInterval(timer)
			}

			counter++
		}, 6000)
	}

	componentDidUpdate() {
		if (this.props.room && !this.state.roomOpen) {
			this.setState({
				roomOpen: true,
			})
		}

		if (!this.props.room && this.state.roomOpen) {
			this.setState({
				roomOpen: false,
			})
		}

		if (
			this.props.room &&
			this.props.room.component === `Water` &&
			this.state.imgIndex === 1
		) {
			var counter = 2
			var self = this
			var timer = setInterval(function() {
				self.setState({ imgIndex: counter })

				if (counter >= 44 || !self.state.roomOpen) {
					clearInterval(timer)
					self.setState({ imgIndex: 1 })
				}

				counter++
			}, 6000)
		}
	}

	render() {
		if (!this.props.room) {
			return <h2 className="select">Select a room...</h2>
		}
		const findElement = this.props.room.component === `Water` && <WaterScene />
		const hasDescription = this.props.room.description.length > 0
		const srcImg = `../../images/showroom/${this.state.imgIndex}.JPG`
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
				{this.props.room.component === `Water` && (
					<div className="room_slider">
						<img src={srcImg} className="room_slider-img" alt="test" />
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
