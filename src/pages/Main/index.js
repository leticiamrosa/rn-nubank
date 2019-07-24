import React from "react";
import {
  Container,
  Card,
  Content,
  CardHeader,
  Title,
  Description,
  Annotation,
  CardFooter,
  CardContent
} from "./styles";
import Header from "../../components/Header/index";
import Tabs from "../../components/Tabs/index";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$1.000.000,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$20,00 recebida de Arya Stark hoje ás 6 horas
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
