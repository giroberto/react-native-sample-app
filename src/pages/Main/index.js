import React from "react";
import { Form, TextInput } from "react-native";
import { Container } from "./styles";

export default function Main() {
  return (
    <Container>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Add user"
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: "Usuários"
};
