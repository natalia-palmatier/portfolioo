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
			<Heading>Contact Me</Heading>
			<FooterLink href="#">Natalia Palmatier</FooterLink>
		</Column>
        <Column>
			<Heading>Contact Me</Heading>
			<FooterLink href="#">Natalia Palmatier</FooterLink>
		</Column>
        <Column>
			<Heading>Contact Me</Heading>
			<FooterLink href="#">Natalia Palmatier</FooterLink>
		</Column>
		<Column>
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
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
