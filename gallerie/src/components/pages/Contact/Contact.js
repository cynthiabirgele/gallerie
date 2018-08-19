import React, { Component } from "react"
import "./contact.css"

class Contact extends Component {
	render() {
		return (
			<div className="content">
				<h2 className="header-title">Contact</h2>
				<div className="content-body">
					<div className="profile-info">
						<img
							className="profile-img"
							alt="profile"
							src="../../images/profile.jpg"
						/>
						<p> &#169; Cynthia Birgele</p>
						<p>Front-End Application Development Analyst</p>
						<p>Email: info@uzsienas.lv</p>
						<div>
							<a
								href="https://www.linkedin.com/in/sintija-birgele"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="social-icon"
									src="../../images/linkedin.png"
									alt="linkedin"
								/>
							</a>
							<a
								href="https://www.instagram.com/uzsienas/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="social-icon"
									src="../../images/insta.png"
									alt="instagram"
								/>
							</a>
							<a
								href="https://www.pinterest.com/uzsienas/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="social-icon"
									src="../../images/pin.png"
									alt="pinterest"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact
