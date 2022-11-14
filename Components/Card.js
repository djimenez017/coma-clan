import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";

const Carda = (props) => (
  <Card
    css={{
      w: "100%",
      h: "400px",
      margin: "20px auto",
      boxSizing: "border-box",
      maxW: "395px",
    }}
  >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Teammember
        </Text>
        <Text h2 weight={"normal"} color="white" weight="bold">
          {props.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/18f75e51-be69-4bf7-81c1-fb699d22e9ff-profile_image-70x70.png"
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
          {props.social.map((url, index) => {
            return (
              <SocialIcon url={url} key={index} style={{ margin: "5px" }} />
            );
          })}
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default Carda;
