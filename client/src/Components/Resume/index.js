import React from "react";
import { Jumbotron } from "reactstrap";

function Resume() {
	return (
		<div id="resume-container">
			<Jumbotron id="resume-jumbotron">
				<h3 className="display-3 resume-header">Experience</h3>
				<hr className="my-2" />
				<br />
				<br />
				<p className="display-4 resume-sub-header">
					Trilogy Education Services
				</p>
				<p>
					<strong>
						<i>
							Lead Online Instructional Recruiter / Product
							Vertical Regional Recruitment Manager
						</i>
					</strong>
				</p>
				<p>
					<i>June 2018 - Present</i>
				</p>
				<ul>
					<li>
						Manage full-cycle recruitment from sourcing,
						interviewing, through offers and staffing
					</li>
					<li>
						Developed custom MERN stack applications for internal
						data management and tracking
					</li>
					<li>
						Conduct Initial, and Verbal Technical Interviews while
						assessing the candidate’s experience, and knowledge of
						technical stacks
					</li>
					<li>
						Agile change agent, effective in adjusting to team
						changes and managing multiple priorities at a given time
					</li>
					<li>
						Manage the design and implementation of Recruitment
						processes for the company’s latest product launch
					</li>
					<li>
						Piloted a new online technical assessment platform, now
						utilized for all interview processes; saving 1 hour of
						Interviewers’ time per candidate
					</li>
					<li>
						Develop & lead Instructional Recruitment efforts for
						Trilogy Online programs. Including; managing stakeholder
						relationships, developing new processes, and staffing of
						400+ retained and new hires through July 2020
					</li>
					<li>
						Analyze and record candidate data throughout the
						hiring/staffing processes to provide timely updates to
						key stakeholders during weekly meetings
					</li>
					<li>
						Track data via Excel Sheets, and custom MERN
						applications to ensure efficiency of the developed
						processes for the Qualified technical assessments
					</li>
				</ul>
				<br />
				<br />
				<p className="display-4 resume-sub-header">
					Rutgers University & The University of Texas, Austin
				</p>
				<p>
					<strong>
						<i>Substitute Instructor / Teaching Assistant</i>
					</strong>
				</p>
				<p>
					<i>June 2018 - Present</i>
				</p>
				<ul>
					<li>
						Lead lectures, and educational coding activities for the
						Full Stack Flex Web Development course
					</li>
					<li>
						Support students individually, and in small groups to
						reinforce learning concepts
					</li>
					<li>
						Kept abreast of emerging technologies, software, and
						trends
					</li>
				</ul>
				<br />
				<br />
				<h3 className="display-3 resume-header">Technologies</h3>
				<hr className="my-2" />
				<br />
				<br />
				<p>
					<strong>
						<i>Languages</i>
					</strong>
				</p>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript/ES2015</li>
					<li>Java</li>
				</ul>
				<br />
				<br />
				<p>
					<strong>
						<i>Frameworks/Libraries</i>
					</strong>
				</p>
				<ul>
					<li>React.js</li>
					<li>Redux</li>
					<li>jQuery</li>
					<li>Express.js</li>
					<li>Handlebars.js</li>
				</ul>
				<br />
				<br />
				<p>
					<strong>
						<i>Databases</i>
					</strong>
				</p>
				<ul>
					<li>MySQL</li>
					<li>PostgreSQL</li>
					<li>MongoDB</li>
				</ul>
				<br />
				<br />
				<p>
					<strong>
						<i>Other Technologies</i>
					</strong>
				</p>
				<ul>
					<li>GraphQL</li>
					<li>Heroku</li>
					<li>Visual Studio</li>
					<li>Version Control</li>
					<li>Firebase.io</li>
				</ul>
			</Jumbotron>
		</div>
	);
}

export default Resume;
