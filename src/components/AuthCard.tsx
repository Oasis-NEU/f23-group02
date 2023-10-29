import { Card, Col, Container, Row } from 'react-bootstrap';

import './AuthCard.css';

const AuthCard = ({ children }: any) => (
	<Container fluid="sm" className="py-5 h-100">
		<Row className="d-flex justify-content-center align-items-center h-100">
			<Col className="col-12" md="8" lg="6" xl="5">
				<Card className="auth-card shadow-2-strong">
					<div className="card-body p-5 text-center">{children}</div>
				</Card>
			</Col>
		</Row>
	</Container>
);

export default AuthCard;
