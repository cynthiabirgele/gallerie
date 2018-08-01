import React, { Component } from "react"
import Water from "./Water"
import "./WaterScene.css"

export default class WaterScene extends Component {
	state = {
		showInfo: false,
		imgIndex: 1,
		roomOpen: false,
		interval: 0,
	}

	componentDidMount(prevProps, prevState) {
		if (this.props.room === `Water`) {
			this.setState({
				roomOpen: true,
			})
		}

		if (
			this.props.room === `Water` &&
			this.state.imgIndex === 1 &&
			!this.state.roomOpen
		) {
			var counter = 2
			var self = this
			var timer = setInterval(function() {
				self.setState({ imgIndex: counter, interval: timer })

				if (counter >= 44) {
					counter = 0
				}

				counter++
			}, 6000)
		}
	}
	componentWillUnmount() {
		clearInterval(this.state.interval)
	}

	render() {
		const findElement = <Water />
		const srcImg = `../../images/showroom/${this.state.imgIndex}.JPG`
		return (
			<div className="water-scene-container">
				<div className="room_slider">
					<img src={srcImg} className="room_slider-img" alt="test" />
				</div>
				{findElement}
			</div>
		)
	}
}
