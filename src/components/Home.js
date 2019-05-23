import React from "react";
import { Link } from "react-router-dom";
import Aquarius from "../assets/images/aquarius.png";
import { Container, Card, Header, Grid, Image } from "semantic-ui-react";

const Home = props => {
	return (
		<div>
			<Container>
				<div style={{ marginTop: "10%" }}>
					<Header size="huge" textAlign="center">
						ZodiAddict
					</Header>
				</div>
				<Grid>
					<Grid.Column mobile={6} tablet={8} computer={4}>
						<Image src="/images/wireframe/paragraph.png" />
					</Grid.Column>
					<Grid.Column mobile={6} tablet={8} computer={4}>
						<Image src="/images/wireframe/paragraph.png" />
					</Grid.Column>
					<Grid.Column mobile={6} tablet={8} computer={4}>
						<Image src="/images/wireframe/paragraph.png" />
					</Grid.Column>
					<Grid.Column mobile={6} tablet={8} computer={4}>
						<Image src="/images/wireframe/paragraph.png" />
					</Grid.Column>
					<Grid.Column mobile={6} tablet={8} computer={4}>
						<Image src="/images/wireframe/paragraph.png" />
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
