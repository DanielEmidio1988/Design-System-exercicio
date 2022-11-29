import {ChakraProvider, Button, GenericAvatarIcon} from "@chakra-ui/react"
import Card from "./components/Card"
import ironman from "./assets/irmanicon.png"
import capamerica from "./assets/capamicon.png"
import thor from "./assets/thoricon.png"

function App() {
  const herois = [{
    id: 1,
    nome: "Tony Stark",
    identidade: "Homem de Ferro",
    avatar: ironman,
    sobre: "Genio, Filantropo, Milionário"
  },
  {
    id: 2,
    nome: "Steve Rogers",
    identidade: "Capitão America",
    avatar: capamerica,
    sobre: "Lider dos Vingadores, o homem de outro tempo, super-soldado",
  },
  {
    id: 3,
    nome: "Thor",
    identidade: "Deus do Trovão",
    avatar: thor,
    sobre: "Vingador Mais Forte, Rei de Asgard",
  }]

  return (
    <ChakraProvider>
      {/* Exercicio 1 - Instalar o React, o Chakra e incluir um botão, verificando 
      se está tudo funcionando. */}
      {/* <Button colorScheme='blue'>Button</Button> */}
      {herois.map((heroi) => { return <Card heroi={heroi} key={heroi.id}/>})}
    </ChakraProvider>
  );
}

export default App;
