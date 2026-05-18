import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: "0px" }}>
      <Col className="text-center">
        <Button
          variant="primary"
          size="lg"
          href="https://www.youtube.com/channel/UCV9KZtL1yqQqHkXj8w5l7g"
        >
          Visit my channel to get more projects
        </Button>
      </Col>
    </Row>
  );
};

export default About;
