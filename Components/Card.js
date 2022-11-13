import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const Carda = (props) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Teammember
        </Text>
        <Text h3 color="white">
          {props.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-5.jpeg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          Hello
          {/* {props.social.map((site, index) => {
            <p>{site}</p>;
          })} */}
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default Carda;
