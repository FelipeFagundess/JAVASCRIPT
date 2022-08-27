    let txtn1 = window.document.getElementById('txtnum')
    let flista = window.document.getElementById('flista')
    let res = window.document.getElementById('res')
    let valores = []
    function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
    return true
    }else {
        return false
    }
    }
    function inlist(){

    }
    function calcular(){
        if (isnumero(txtn1.value) && !inlist(flista.value, valores)){

        }else {
            window.alert('verifique o numero')
        }

    }