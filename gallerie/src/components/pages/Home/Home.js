import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./home.css"

class Home extends Component {
	render() {
		return (
			<div className="content">
				<h2 className="header-title">...</h2>
				<div className="start">
					<img className="start-img" src="../../images/shuttle.jpg" alt="01" />
					<p className="start-info">
						WELCOME! The rocket has just launched leaving a long trail as it has
						blasted off high above the map. We have lots of exciting things
						lined up to be launched, follow up{" "}
						<Link to="/demo"> uzsienas.lv/demo </Link>!
					</p>
				</div>
			</div>
		)
	}
}

export default Home
