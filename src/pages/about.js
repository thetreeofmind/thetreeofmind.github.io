import React, { Component } from "react";
import BlogNav from "../components/blogs/BlogNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

import "../scss/about.scss";

class About extends Component {
	render() {
		return (
		  <>
			<Helmet>
			  <title>About</title>
			  <meta name="about" content="about this site." />
			</Helmet>
	  
			<BlogNav />
	  
			<div className="about">
				<p>There is nothing to talk about this site for now.</p>
			</div>

			<Footer />
		  </>
		)
	}
}

export default About;