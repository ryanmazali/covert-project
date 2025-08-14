//Cotação de moedas do dia.
const USD = 5.39
const EUR = 6.31
const GBP = 7.33


//Obtendo os elementos do formulário.
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

//Manipulando o input amount para receber somente números.
amount.addEventListener('input', () => {
    const hasChactersRegex = /\D+/g
    amount.value = amount.value.replace(hasChactersRegex, '')
})

//Capturando o evento de submit do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case 'USD':convertCurrency(amount.value, USD, 'US$')
        break
        case 'EUR':convertCurrency(amount.value, EUR, '€')
        break
        case 'GBP':convertCurrency(amount.value, GBP, '£')
        break
    }
}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try{
    //Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //Calcula o total da conversão.
    let total = amount * price

    if (isNaN(total)) {
        return alert('Valor inválido')
    }
    //Exibe o resultado total.
    result.textContent = formatCurrencyBRL(total)

    //Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add('show-result')
  } catch (error) {
    console.error(error)

    //Remove a classe que exibe o footer caso ocorra um erro.
    footer.classList.remove('show-result')
    alert('Ocorreu um erro ao converter a moeda. Tente novamente mais tarde.')
    
  } 
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
