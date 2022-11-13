import React from "react";
import { Text } from "@nextui-org/react";
import comamembers from "../Components/data/members.json";
import Card from "../Components/Card";

const members = () => {
  return (
    <div>
      <Text
        h1
        weight={"normal"}
        size={"$4xl"}
        color="inherit"
        css={{
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        COMA Members
      </Text>

      {comamembers.map((member, index) => (
        <Card name={member.name} key={index} social={member.social} />
      ))}
    </div>
  );
};

export default members;
