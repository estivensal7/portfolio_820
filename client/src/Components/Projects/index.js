import React, { useState } from "react";
import {
	Container,
	Card,
	Button,
	CardTitle,
	CardText,
	CardImg,
	Row,
	Col,
	CardSubtitle,
	NavLink,
} from "reactstrap";

// IMAGES
import stacheBarbers from "../../assets/stache-barbers.png";
import pomodoroTimer from "../../assets/pomodoro-timer.png";

const Projects = (props) => {
	return (
		<Container>
			<Row>
				<Col sm="6">
					<Card body>
						<CardImg
							top
							width="100%"
							src={pomodoroTimer}
							alt="Pomodoro Timer Project Image"
						/>
						<CardTitle>
							<strong>Pomodoro Timer</strong>
						</CardTitle>
						<CardSubtitle>
							<strong>
								Time management application enhancing the
								commonly utilized 'Pomodoro Technique'.
							</strong>
						</CardSubtitle>
						<br />
						<CardText>
							Choose the tasks you'd like to get done. Work on
							each task for 25 minutes using the timers. When the
							25 minutes are complete, mark the task as completed.
							Take a short break using the timers as a reference.
							Every 4 'Pomodoros' take a longer break.
						</CardText>
						<CardText>
							Want to test it? Use the following log in
							credentials.
							<br />
							email: MasterOfTime@pomodoro-timer.com
							<br />
							password: testing123
						</CardText>
						<CardText>
							<strong>Front End Technologies</strong>
							<br />
							<ul>
								<li>React.js</li>
								<li>Redux</li>
								<li>reactstrap</li>
								<li>moment.js</li>
							</ul>
							<br />
							<strong>Back End Technologies</strong>
							<br />
							<ul>
								<li>Node.js</li>
								<li>Express.js</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
								<li>JSON Web Token</li>
								<li>bcrypt</li>
							</ul>
						</CardText>
						<Button id="github-link-button">
							<NavLink
								className="project-link"
								href="https://github.com/estivensal7/PomodoroTimer"
								target="_blank">
								Code
							</NavLink>
						</Button>
						<Button id="deployed-link-button">
							<NavLink
								className="project-link"
								href="https://pomodoro-timer-salazar.herokuapp.com/"
								target="_blank">
								Live App
							</NavLink>
						</Button>
					</Card>
				</Col>
				<Col sm="6">
					<Card body>
						<CardImg
							top
							width="100%"
							src={stacheBarbers}
							alt="Stache Barbers Project Image"
						/>
						<CardTitle>
							<strong>Stache Barbers</strong>
						</CardTitle>
						<CardSubtitle>
							<strong>
								Barbershop Portfolio with an eCommerce store.
							</strong>
						</CardSubtitle>
						<br />
						<CardText>
							Full application for Stache Barbers including an
							eCommerce store. Features include a portfolio page
							displaying pertinent information about the business.
							Vagaro Widget utilized to give users the ability to
							book appointments directly through the application.
							Lastly the full-service online-store accepts
							payments with the Stripe.js API.
						</CardText>
						<CardText>
							<strong>Front End Technologies</strong>
							<br />
							<ul>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>CSS3</li>
							</ul>
							<br />
							<strong>Back End Technologies</strong>
							<br />
							<ul>
								<li>Node.js</li>
								<li>Express.js</li>
								<li>MySQL</li>
								<li>Sequelize</li>
								<li>emailjs</li>
								<li>Stripe.js API</li>
							</ul>
						</CardText>
						<Button id="github-link-button">
							<NavLink
								className="project-link"
								href="https://github.com/estivensal7/stachebarbers"
								target="_blank">
								Code
							</NavLink>
						</Button>
						<Button id="deployed-link-button">
							<NavLink
								className="project-link"
								href="https://whispering-basin-17737.herokuapp.com/"
								target="_blank">
								Live App
							</NavLink>
						</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
