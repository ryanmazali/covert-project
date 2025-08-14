# 💱 Conversor de Moedas

Um simples e funcional conversor de moedas feito com **HTML**, **CSS** e **JavaScript**.  
O projeto converte valores de **Dólar Americano (USD)**, **Euro (EUR)** e **Libra Esterlina (GBP)** para **Real Brasileiro (BRL)** utilizando cotações fixas definidas no código.

> 💡 Este projeto foi desenvolvido durante as aulas da **Rocketseat**, com licença aberta para estudos e modificações.

## 🚀 Funcionalidades

- Entrada de valor somente com números (validação no JavaScript).
- Conversão em tempo real com base na moeda selecionada.
- Exibição da cotação atual da moeda escolhida.
- Interface simples, responsiva e intuitiva.
- Mensagens de erro para entradas inválidas.


## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura do projeto.
- **CSS3** – Estilização e responsividade.
- **JavaScript (Vanilla)** – Lógica de conversão e manipulação do DOM.

## 📂 Estrutura de Pastas

```
/
├── img/
│   ├── logo.svg
│   └── preview.png
├── styles.css
├── scripts.js
└── index.html
```

## 📋 Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Abra o arquivo `index.html` no seu navegador ou use uma extensão como **Live Server** no VS Code.

3. Insira um valor, selecione a moeda e clique em **"Converter em reais"**.

## 📌 Observação

As cotações são **fixas** e definidas no código JavaScript:
```javascript
const USD = 5.39
const EUR = 6.31
const GBP = 7.33
```
Para usar cotações em tempo real, será necessário integrar com uma **API de câmbio**.

## 📄 Licença

Este projeto está sob **licença aberta** para estudos e modificações.  
Criado durante as aulas da [Rocketseat](https://www.rocketseat.com.br/).

---