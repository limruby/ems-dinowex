import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Success extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <br></br>
=======
                <h3><strong>Account Created Successfully!</strong></h3>
				<br></br>
>>>>>>> bad270e (with logout function)
				<Link to="/sign_in">
					<div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Please Sign In Here</a></div>
				</Link>
            </div>
        )
    }
}

export default Success
