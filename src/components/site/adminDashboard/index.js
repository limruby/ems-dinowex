import React from 'react';
import { Tab, Nav, Row, Col, Card } from "react-bootstrap";
import { FaCertificate, FaMedal, FaMarker, FaLink, FaMicrophone, FaUser } from 'react-icons/fa';
import { BsPeopleFill, BsFiles } from "react-icons/bs";

import Account from './account';
import Competitor from './competitor-sec';
import Visitor from './visitor-sec'
import Sponsor from './sponsor-sec';
import Judge from './judge-sec';
import Speaker from './speaker-sec';
import Order from './order-sec';
import Links from './links-sec';
import './table.css'

function AdminDashboard() {
	var adminEmail = localStorage.getItem('email');
	if (adminEmail !== 'admin@dinowex.com') {
		window.location.href = "/page_not_found"
	}
	function TabTitles() {
		return (
			<Nav variant="pills" className="flex-column">
				<Nav.Item>
					<Nav.Link eventKey="Account"><BsPeopleFill size={20} /> Account </Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Competitor"><BsFiles size={20} /> Competitor</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Sponsor"><FaCertificate size={20} /> Sponsor</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Judge"><FaMarker size={20} /> Judge</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Visitor"><FaUser size={20} /> Visitor</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Speaker"><FaMicrophone size={20} /> Speaker </Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Order"><FaMedal size={20} /> Order</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="Link"><FaLink size={20} /> Event Links </Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}

	var activeKeys = ""
	if (localStorage.getItem("activeKeys")) {
		activeKeys = localStorage.getItem("activeKeys");
		localStorage.removeItem("activeKeys")
	}
	else {
		activeKeys = "Account"
	}
	return (
		<div>
			<div className="welcome-box"><h1>Welcome Dinowex Admin!</h1></div>
			<div className="wrapper">
				<Tab.Container id="left-tabs-example" defaultActiveKey={activeKeys}>
					<Row>
						<Col sm={3} className="sidebar-wrapper">
							{TabTitles()}
						</Col>

						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="Account">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2> Account </h2>
												<Account />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="Competitor">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2> Competitor Profile </h2>
												<Competitor />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>


								<Tab.Pane eventKey="Sponsor">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2> Sponsor Profile</h2>
												<Sponsor />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="Judge">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2>List of Judges</h2>
												<Judge />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="Order">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2>Medal & Certificate Order</h2>
												<Order />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="Link">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2>Event Links</h2>
												<Links />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="Speaker">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2>Speakers</h2>
												<Speaker />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="Visitor">
									<Card>
										<Card.Body>
											<div className="sec-container">
												<h2> Visitor Profile</h2>
												<Visitor />
											</div>
										</Card.Body>
									</Card>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</div>
	);

}

export default AdminDashboard;