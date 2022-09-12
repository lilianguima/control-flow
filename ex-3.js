
const prompt = require ('prompt-sync')()

const idadeText = prompt ('Digite sua idade: ')
const idade = Number(idadeText)

//processamento e saida 
if(idade >=10 && idade <= 14){ console.log('Idade Infatil')}
else if ( idade >= 15 && idade <= 17) {console.log('Idade Juventil')}
else if (idade>= 18 && idade<=25){ console.log('Idade adulto')} 
