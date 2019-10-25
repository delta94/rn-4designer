import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";

export default function App() {
  return (
    <Contaier>
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome Back,</Title>
        <Name>NHT</Name>
      </TitleBar>
      <SubTitle>Continue Learning</SubTitle>
      <Card></Card>
    </Contaier>
  );
}

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 13px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Contaier = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 18px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
