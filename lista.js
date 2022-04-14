function CriarBotaoSave(){ // está aqui para não ter problema quando a função ser chamada
    const botao_save =  document.createElement('button') //cria elemento tipo botao
    botao_save.classList.add("btn", "btn-primary") //atribui 2 classes para o botao 
    botao_save.innerHTML = "Save modifications" //insere o texto de delete no botao
    botao_save.type = "button" // deixa o botão como tipo button
    botao_save.addEventListener("click", SaveItem) //Se houver o evento clique nele, chama a função de SaveItem
    return botao_save
}


function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button') //cria elemento tipo botao
    botao_delete.classList.add("btn", "btn-danger") //atribui 2 classes para o botao 
    botao_delete.innerHTML = "Delete" //insere o texto de delete no botao
    botao_delete.type = "button" // deixa o botão como tipo button
    botao_delete.addEventListener("click", DeleteItem) //Se houver o evento clique nele, chama a função de DeleteItem
    return botao_delete
}


function CriarBotaoEdit(){
    const botao_edit =  document.createElement('button') //cria elemento tipo botao
    botao_edit.classList.add("btn", "btn-warning") //atribui 2 classes para o botao 
    botao_edit.innerHTML = "Edit" //insere o texto de delete no botao
    botao_edit.type = "button" // deixa o botão como tipo button
    botao_edit.addEventListener("click", EditItem) //Se houver o evento clique nele, chama a função de EditItem
    return botao_edit
}



function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function EditItem(){
    const item_lista = this.parentElement// elemento pai é o o item da lista
    const campo_entrada_para_editar = document.createElement("input") //cria um elemento input
    item_lista.innerHTML = ''//serve para não adicionar outros botoes e além disso REMOVE TODOS OS FILHOS DO PAI
    item_lista.appendChild(campo_entrada_para_editar) //anexa o input ao item da lista
    item_lista.appendChild(CriarBotaoDelete()) //anexa o botão delete
    item_lista.appendChild(CriarBotaoSave()) //anexa o botão save
    campo_entrada_para_editar.select() //serve para  selecionar o campo de entrada sem precisar clicar em cima
}

function SaveItem(){
    const novo_valor_item_lista = this.parentElement.firstChild //nesse caso a primeira criança é o input, por isso o novo_valor_item_lista é o que foi digitado lá
    const item_lista = this.parentElement // nesse caso o pai é o 'li' adicionado
    item_lista.innerHTML = novo_valor_item_lista.value //remove todos os elementos filhos e adiciona a informação capturada no novo_valor_item_lista
    item_lista.appendChild(CriarBotaoDelete()) //anexa o botão Delete
    item_lista.appendChild(CriarBotaoEdit()) //anexa o botao Edit
}


function Submit(){ // Ao clicar no botão para enviar as tarefas, chama a função Submit()
    const lista = document.querySelector('[data-task]') // constante para encontrar o seletor da 'ul' no html que é a tag de lista
    const valor = document.querySelector('[data-form-input]') //consante para encontrar o seletor da 'input' que é a caixa de texto para inserir as tarefas
    const novo_item_lista = document.createElement("li") //cria um elemento de item de lista
    novo_item_lista.className = "list-group-item";//atribui uma classe de estilização para que cada tarefa apareça de maneira mais organizada, caso for retirada não altera a lógica de funcionamento do programa
    novo_item_lista.innerHTML = valor.value //atribui o valor ao 'li' o mesmo que foi digitado no 'input'
    novo_item_lista.appendChild(CriarBotaoDelete()) //anexa uma criança ao pai que nesse caso é o novo_item_lista
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild (novo_item_lista) //anexa a criança novo_item_lista para a lista 'ul'
    document.getElementById("item").value = ""
    valor.innerHTML = 'batata' 
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
