import Work1 from "../../assets/jorket.jpg";
import Work2 from "../../assets/subject.png";
// import Work3 from "../../assets/travel.png";

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
	}
	// {
	// 	id: 3,
	// 	image: Work3,
	// 	title: "Project3",
	// 	category: ["Frontend"],
	// 	repositoryUrl: "https://github.com/karthikveerla/jorket",
	// 	description:"Hello description"
	// }
];

export default Menu;
