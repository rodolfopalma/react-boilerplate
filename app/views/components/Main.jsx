import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";


export default class Main extends React.Component {
	render() {
        return (
            <div>
                <NavBar />
                { this.props.children }
                <Footer />
            </div>
       );
	}
}
