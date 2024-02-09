const perguntas = [
    {
      pergunta: "Qual é o termo utilizado para descrever um arremessador que joga com a mão direita no baseball?",
      respostas: [
        "Esquerda",
        "Direita",
        "Ambidestro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a posição que fica entre a segunda e a terceira base no baseball?",
      respostas: [
        "Catcher",
        "Shortstop",
        "Center Fielder"
      ],
      correta: 1
    },
    {
      pergunta: "Quantas entradas compõem uma partida oficial de baseball?",
      respostas: [
        "6",
        "7",
        "9"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a equipe que detém o recorde de mais títulos na World Series?",
      respostas: [
        "Boston Red Sox",
        "Los Angeles Dodgers",
        "New York Yankees"
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de arremesso no baseball?",
      respostas: [
        "Fastball",
        "Curveball",
        "Slam Dunk"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a distância entre as bases no baseball?",
      respostas: [
        "90 pés",
        "100 pés",
        "110 pés"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes não é uma posição defensiva no baseball?",
      respostas: [
        "First Baseman",
        "Second Baseman",
        "Center Forward"
      ],
      correta: 2
    },
    {
      pergunta: "Quem detém o recorde de mais home runs em uma única temporada na MLB?",
      respostas: [
        "Babe Ruth",
        "Barry Bonds",
        "Hank Aaron"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um 'inning' no baseball?",
      respostas: [
        "Uma entrada",
        "Uma eliminação",
        "Um home run"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o objetivo principal do lançador (pitcher) no baseball?",
      respostas: [
        "Fazer home runs",
        "Conseguir strikeouts",
        "Conseguir rebatidas"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }