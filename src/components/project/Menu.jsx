import Work1 from "../../assets/jorket.jpg";
import Work2 from "../../assets/subject.png";
import Work3 from "../../assets/work3.png";

const Menu = [
	{
		id: 1,
		image: Work1,
		title: "Jorket",
		category: ["Full Stack", "Java"],
		repositoryUrl: "https://github.com/karthikveerla/jorket",
		description: "A scalable full-stack web platform connecting blue-collar service providers with customers. Features include KYC verification, real-time service booking, in-app payments, reviews, and admin tools for user and database management."
	},
	{
		id: 2,
		image: Work2,
		title: "AI-Powered Faculty Subject Allocation System",
		category: ["Frontend", "Django"],
		repositoryUrl: "https://github.com/karthikveerla/python_subject_allocation",
		description: "Automated subject allocation system using Django microservices, Oracle SQL optimization, and a React.js dashboard. Deployed with Docker and AWS Lambda for scalability, ensuring fairness and efficiency through analytics."
	},
	{
		id: 3,
		image: Work3, 
		title: "Interactive Quiz Application",
		category: ["Java", "Full-Stack"],
		repositoryUrl: "https://github.com/karthikveerla/spring_microservices_quiz_application",
		description:
			"A dynamic quiz application featuring timed questions, live score tracking, and category-based quizzes. Built with React.js and Node.js, supporting custom question sets and responsive UI for smooth user engagement."
	}
];

export default Menu;
