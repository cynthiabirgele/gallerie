import './navigation.css';
import { Link } from 'react-router-dom';
var React = require('react');

export default class Navigation extends React.Component {
	render() {
		return (
			<div className="nav">
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/welcome">Home</Link></li>
          <li className="nav-list-item"><Link to="/about">About</Link></li>
          <li className="nav-list-item"><Link to="/demo">Demo</Link></li>
          <li className="nav-list-item"><Link to="/contact">Contact</Link></li>
        </ul>
			</div>
		);
	}
}
