function calcular() {
    let ini1 = window.document.getElementById('txti')
    let fim2 = window.document.getElementById('txtf')
    let passo3 = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if (ini1.value.length == 0 || fim2.value.length == 0 || passo3.value.length == 0) {
        alert('[ERRO] DIGITE UM VALOR NAS CAIXAS')
    } else{
        res.innerHTML = 'contador: <br>'
        var ini = Number(ini1.value)
        var fim = Number(fim2.value)
        var passo = Number(passo3.value)
     for(var c = ini;c <= fim;c += passo){
         res.innerHTML += `${c}  `
     }
     if(ini > fim){
         res.innerHTML = 'impossivel contar'
     }
    
    }
    }
    console.lgo