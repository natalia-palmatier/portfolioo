import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Blog</Heading>
			<Heading><a href="https://medium.com/@nataliap_51590"><img src="../medium.png" alt="medium blog logo" style={{ width: "20%" }}></img></a></Heading>
			{/* <FooterLink href="https://medium.com/@nataliap_51590">Natalia Palmatier</FooterLink> */}
		</Column>
        <Column>
			<Heading>Linkedin</Heading>
			<Heading><a href="https://www.linkedin.com/in/natalia-palmatier/"><img src="../linkedin.png" alt="Linkedin logo" style={{ width: "20%" }}></img></a></Heading>
			{/* <FooterLink href="https://www.linkedin.com/in/natalia-palmatier/">Natalia Palmatier</FooterLink> */}
		</Column>
		<Column>
			<Heading>Github</Heading>
			<Heading><a href="https://github.com/natalia-codes"><img src="../github.png" alt="Github logo" style={{ width: "20%" }}></img></a></Heading>
			{/* <FooterLink href="https://www.linkedin.com/in/natalia-palmatier/">Natalia Palmatier</FooterLink> */}
		</Column>
		<Column>
			<Heading>Email</Heading>
			<Heading><a href="#contact"><img src="../email.png" alt="Email logo" style={{ width: "20%" }}></img></a></Heading>
			{/* <FooterLink href="https://www.linkedin.com/in/natalia-palmatier/">Natalia Palmatier</FooterLink> */}
		</Column>
		{/* <Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column> */}
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
