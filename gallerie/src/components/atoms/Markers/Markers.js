import React, { Component } from "react"
import "./Markers.css"

export default class Markers extends Component {
	state = {
		markerActive: false,
	}

  onMouseEnter() {
    if(!this.state.markerActive) {
      this.setState({markerActive: true})
    }
  }

  onMouseLeave() {
    if(this.state.markerActive) {
      this.setState({markerActive: false})
    }
  }

	render() {
    const cameraClass = this.state.markerActive ? `../../images/maps/icon/marker-active.png` : `../../images/maps/icon/marker.png`
		return (
			<div className="marker">
          <img ref={marker => {this.marker = marker}} src={cameraClass} alt="test" className="camera" onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() =>this.onMouseLeave()}/>
			</div>
		)
	}
}
