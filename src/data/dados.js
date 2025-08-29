const herois = [
    {
        id: 1,
        nome: "Superman",
        identidadeSecreta: "Clark Kent",
        poder: "Super força, voo, visão de calor",
        fraqueza: "Kriptonita",
        universo: "DC",
        ativo: true,
    },
    {
        id: 2,
        nome: "Spider-Man",
        identidadeSecreta: "Peter Parker",
        poder: "Agilidade, teia, sentido aranha",
        fraqueza: "Responsabilidade excessiva",
        universo: "Marvel",
        ativo: true,
    },
    {
        id: 3,
        nome: "Batman",
        identidadeSecreta: "Bruce Wayne",
        poder: "Inteligência, gadgets, dinheiro",
        fraqueza: "Apenas humano",
        universo: "DC",
        ativo: false,
    },
    {
        id: 4,
        nome: "Wonder Woman",
        identidadeSecreta: "Diana Prince",
        poder: "Super força, laço da verdade, voo",
        fraqueza: "Perder os braceletes",
        universo: "DC",
        ativo: true,
    },
    {
        id: 5,
        nome: "Iron Man",
        identidadeSecreta: "Tony Stark",
        poder: "Armadura tecnológica, inteligência",
        fraqueza: "Dependência da armadura",
        universo: "Marvel",
        ativo: false,
    },
];

const viloes = [
    {
        id: 1,
        nome: "Joker",
        identidadeSecreta: "Desconhecida",
        poder: "Caos, toxinas, loucura",
        objetivo: "Destruir Batman",
        universo: "DC",
        perigoso: true,
    },
    {
        id: 2,
        nome: "Thanos",
        identidadeSecreta: "Thanos",
        poder: "Manopla do Infinito, força cósmica",
        objetivo: "Equilibrar o universo",
        universo: "Marvel",
        perigoso: true,
    },
    {
        id: 3,
        nome: "Lex Luthor",
        identidadeSecreta: "Alexander Luthor",
        poder: "Inteligência, recursos financeiros",
        objetivo: "Destruir Superman",
        universo: "DC",
        perigoso: false,
    },
    {
        id: 4,
        nome: "Green Goblin",
        identidadeSecreta: "Norman Osborn",
        poder: "Planador, bombas abóbora, força aumentada",
        objetivo: "Destruir Spider-Man",
        universo: "Marvel",
        perigoso: true,
    },
];

const universos = [
    { 
        id: 1, 
        nome: "DC", 
        editora: "DC Comics", 
        fundacao: 1934,
        sede: "Burbank, Califórnia"
    },
    { 
        id: 2, 
        nome: "Marvel", 
        editora: "Marvel Comics", 
        fundacao: 1939,
        sede: "Nova York, Nova York"
    },
    { 
        id: 3, 
        nome: "Image", 
        editora: "Image Comics", 
        fundacao: 1992,
        sede: "Portland, Oregon"
    },
];

export default { herois, viloes, universos };