# TextOracle 🔮​

## Visão geral 👁️​
Projeto desenvolvido durante meus testes com modelos ia do site Huggin Face.

Atualmente o projeto contém um chat que lê o texto enviado pelo usuário e avalia se a emoção expressada no texto é positiva ou negativa. Utilizando do modelo de linguagem *"bert-base-multilingual-uncased-sentiment"*

## Para Acessar Localmente 🏠​
Para acessar o frontEnd localmente basta abrir o arquivo index.html no seu navegador.

Para utilizar das capabilidades da API de analise de sentimento é necessário criar uma conta no site da [Hugging Face](https://huggingface.co/) Depois disso nas configurações da conta gerar um token de acesso e substituir no arquivo *main.js* a variavel *apiKey* pelo seu token
````
const apiKey = 'sua api key'
````

## Tecnologias Utilizadas​ 🤖​
Html/Css + JS

## BackEnd 🔙​
Para a leitura de chat foi utilizada da api [bert-base-multilingual-uncased-sentiment](https://huggingface.co/nlptown/bert-base-multilingual-uncased-sentiment)

## Resultados
![image](https://github.com/user-attachments/assets/ac825d2d-2581-498d-b841-7b76471cf52c)

![image](https://github.com/user-attachments/assets/8f14c200-b445-46a1-af28-0632f82b6ee1)



## Considerações Finais 📦​
Com o tempo pretendo ir testando mais modelos de ia do site Hugging Face e ir adicionando a este projeto.
