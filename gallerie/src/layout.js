import React from 'react';
import './App.css';

const Layout = props => ({
  render() {
    return (
      <div className="body">
        {this.props.children}
      </div>
    );
  }
});

export default Layout;
