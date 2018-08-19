import React, { Component } from "react"
import "./ArtNouveau.css"

export default class ArtNouveau extends Component {
	state = {
		activeImage: 0,
		isActive: false,
		interval: 0,
	}

	componentDidMount() {
		clearInterval(this.state.interval)
		if (this.props.room === `Art`) {
			window.scrollTo(0, 0)
			this.setState({
				isActive: true,
			})
		}
		if (
			this.props.room === `Art` &&
			this.state.activeImage === 0 &&
			!this.state.isActive
		) {
			var counter = 1
			var self = this
			var timer = setInterval(function() {
				console.log(counter)
				self.setState({
					activeImage: counter,
					isActive: true,
					interval: timer,
				})
				if (counter >= self.props.layers.length - 1) {
					counter = -1
				}
				counter++
			}, 6000)
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.interval)
	}

	render() {
		const layers = this.props.layers
		const images =
			this.props.layers.length > 0
				? layers[this.state.activeImage].map(layer => {
						const activeScaleClass =
							layer.transform === `scale`
								? `${layer.activeX}, ${layer.activeY}`
								: ``
						const scaleAction = layer.transform
						const rotateAction = layer.rotate ? `rotate(${layer.deg}deg)` : ``
						const imgStyle = {
							position: `absolute`,
							height: `100%`,
							margin: `auto`,
							width: `${layer.width}`,
							top: `${layer.top}`,
							bottom: `${layer.bottom}`,
							left: `${layer.left}`,
							right: `${layer.right}`,
							transform: `${scaleAction}(${activeScaleClass}) ${rotateAction}`,
							transition: `transform 5s ease`,
						}
						return <img style={imgStyle} src={layer.src} alt="test" />
				  })
				: {}
		return (
			<div className="carousel-container">
				<div className="carousel">{images}</div>
			</div>
		)
	}
}
