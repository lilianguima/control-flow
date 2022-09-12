const prompt = require ('prompt-sync')()

const N1Text = prompt('Digite o primeiro número: ')
const N2Text = prompt ('Digite o segundo número: ')
const N3Text = prompt ('Digite o terceiro número: ')

const N1 = Number(N1Text)
const N2 = Number(N2Text)
const N3 = Number(N3Text)

if (N1<N2 && N1<N3 && N2<N3) { console.log(`A sequência é: ${N1}; ${N2}; ${N3}`)    
} else if (N1<N2 && N1<N3 && N3<N2){ console.log(`A sequência é: ${N1}; ${N3}; ${N2}`)}
    else if (N2<N1 && N2<N3 && N1<N3) { console.log(`A sequência é: ${N2}; ${N1}; ${N3}`)}
    else if(N2<N1 && N2<N3 && N3<N1){ console.log(`A sequência é: ${N2}; ${N3}; ${N1}`)}
    else if(N3<N1 && N3<N2 && N1<N2){console.log(`A sequência é: ${N3}; ${N1}; ${N2}`)}
    else if (N3<N1 && N3<N2 && N2<N1){ console.log(`A sequência é: ${N3}; ${N2}; ${N1}`)}