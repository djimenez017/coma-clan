import React from "react";
import { Text } from "@nextui-org/react";
import comamembers from "../Components/data/members.json";
import Card from "../Components/Card";
import styled from "styled-components";

const members = () => {
  return (
    <main>
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
      <div
        className="cardContainer"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {comamembers.map((member, index) => (
          <Card name={member.name} key={index} social={member.social} />
        ))}
      </div>
    </main>
  );
};

export default members;
