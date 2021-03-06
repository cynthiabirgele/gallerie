import React from "react"
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import allReducers from "./reducers"
import Layout from "./layout"

import App from "./App"
import Contact from "./components/pages/Contact/Contact"
import About from "./components/pages/About/About"
import Demo from "./components/pages/Demo/Demo"
import Home from "./components/pages/Home/Home"
import NotFound from "./components/pages/NotFound/NotFound"
import "./index.css"

const store = createStore(allReducers)

ReactDOM.render(
	<Provider store={store}>
		<Layout>
			<Router>
				<div className="main">
					<Route path="/" component={App} />
					<Route path="/welcome" component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/about" component={About} />
					<Route path="/demo" component={Demo} />
					<Route path="/notFound" component={NotFound} />
				</div>
			</Router>
		</Layout>
	</Provider>,
	document.getElementById("root"),
)
registerServiceWorker()
