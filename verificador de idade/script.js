    function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        var img = window.document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >=0 && idade < 10){
           //criança
           img.setAttribute('src' , 'criançahomem.png')
         } else if (idade < 20) {
            //jovem
            img.setAttribute('src' , 'jovemhomem.png')
         } else if (idade < 50){
            //adulto
            img.setAttribute('src' , 'adultohomem.png')
         }else {
            //idoso
            img.setAttribute('src' , 'velhohomem.png')
         }
           } else if (fsex[1].checked){
              genero = 'mulher'
              if (idade >=0 && idade < 10){
               //criança
               img.setAttribute('src' , 'criançamulher.png')
             } else if (idade < 20) {
                //jovem
               img.setAttribute('src' , 'jovemmulher.png' )
             } else if (idade < 50){
                //adulto
                img.setAttribute('src' , 'adultomulher.png')
             }else{
                //idoso
                img.setAttribute('src' , 'velhamulher.png')
             }
           }
           res.style.textAlign = 'center'
           res.innerHTML = `detectamos ${genero} com ${idade} anos`
           res.appendChild(img)
         }
      }