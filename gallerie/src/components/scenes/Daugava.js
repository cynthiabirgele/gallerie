import React, { Component } from "react"
import "./Daugava.css"
import  Markers from "../atoms/Markers/Markers.js"

export default class Daugava extends Component {
	state = {
		showImages: false,
    activeItem: null,
	}

  showOverlay(i) {
    this.setState({showImages: true, activeItem: i})
  }

  closeOverlay() {
    this.setState({showImages: false})
  }

	render() {
    var images = []
    for (var n = 1; n <= 20; n++) {
      var source = `../../images/maps/promenade/${this.state.activeItem}/${n}.jpg`
      images.push(<div className="gallerie_item" ><img src={source} className="gallerie_item-img" alt="test"/></div>);
    }

		return (
			<div className="map">
				<div className="map-bg">
          {this.state.showImages && <div className="gallerie">
            <div className="map-header">
            <div
              className="map-close"
              onClick={() => this.closeOverlay()}
            >
                <img
                  src="../../images/close.png"
                  className="close-img"
                  alt="close-img"
                />
            </div>
          </div>
            {images}
          </div>}
            <div className="marker-1" onClick={() => this.showOverlay(1)}><Markers /><p className="marker-num">1</p></div>
            <div className="marker-2" onClick={() => this.showOverlay(2)}><Markers /><p className="marker-num">2</p></div>
            <div className="marker-3" onClick={() => this.showOverlay(3)}><Markers /><p className="marker-num">3</p></div>
            <div className="marker-4" onClick={() => this.showOverlay(4)}><Markers /><p className="marker-num">4</p></div>
            <div className="marker-5" onClick={() => this.showOverlay(5)}><Markers /><p className="marker-num">5</p></div>
            <div className="marker-6" onClick={() => this.showOverlay(6)}><Markers /><p className="marker-num">6</p></div>
            <div className="marker-7" onClick={() => this.showOverlay(7)}><Markers /><p className="marker-num">7</p></div>
            <div className="marker-8" onClick={() => this.showOverlay(8)}><Markers /><p className="marker-num">8</p></div>
          <img src="../../images/maps/riga_map.png" alt="test" className="map-bg"/>
        </div>
			</div>
		)
	}
}
