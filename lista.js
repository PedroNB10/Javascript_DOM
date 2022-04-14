
function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button') //cria elemento tipo botao
    botao_delete.classList.add("btn", "btn-danger") //atrivui 2 classes para o botao 
    botao_delete.innerHTML = "Delete" //insere o texto de delete no botao
    botao_delete.type = "button" 
   
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function Submit(){ // Ao clicar no botão para enviar as tarefas, chama a função Submit()

    const lista = document.querySelector('[data-task]') // constante para encontrar o seletor da 'ul' no html que é a tag de lista
    const valor = document.querySelector('[data-form-input]') //consante para encontrar o seletor da 'input' que é a caixa de texto para inserir as tarefas

    const novo_item_lista = document.createElement("li") //cria um elemento de item de lista
    novo_item_lista.className = "list-group-item";//atribui uma classe de estilização para que cada tarefa apareça de maneira mais organizada, caso for retirada não altera a lógica de funcionamento do programa

    novo_item_lista.innerHTML = valor.value //atribui o valor ao 'li' o mesmo que foi digitado no 'input'
 
    novo_item_lista.appendChild(CriarBotaoDelete()) //anexa uma criança ao pai que nesse caso é o novo_item_lista

    lista.appendChild (novo_item_lista) //anexa a criança novo_item_lista para a lista 'ul'


    document.getElementById("item").value = ""
    
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
