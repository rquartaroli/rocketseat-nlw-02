document.querySelector("#add-time")
                        .addEventListener('click', cloneField)



function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //faz uma cópia de um elemento html(nó), no caso, uma cópia do schedule-item

    const fields = newFieldContainer.querySelectorAll('input') // inseriu os inputs do clone numa variável para limpar elas depois

    fields.forEach(function(field){// limpa todos os inputs clonados
        field.value = "";
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer) //fala onde irá colocar a cópia do elemento
}                        