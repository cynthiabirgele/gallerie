import React, { Component } from "react"
import "./App.css"
import Header from "./components/organisms/header/header"
import Navigation from "./components/organisms/navigation/navigation"
import Home from "./components/pages/Home/Home"

class App extends Component {
	render() {
		const isHome = this.props.location.pathname.length <= 1 || ``
		return (
			<div className="container">
				<Header />
				<Navigation />
				{isHome && <Home />}
			</div>
		)
	}
}

export default App
