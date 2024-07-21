async function consultarRepositorios(){
    const nomeUsuario = document.getElementById("inputNomeUsuario").value;
    const listaRepositorios = document.getElementById("listaRepositorios");

    listaRepositorios.innerText='';

    if(!nomeUsuario){
        alert("Informar o nome do Usuário");
        return;
    }
    const url = `https://api.github.com/users/${nomeUsuario}/repos`;
    const status = document.getElementById("status");
    status.innerText=("Carregando....");
    try {
        const resposta = await fetch(url);
        console.log("antes a promisse");

        /*resposta.then(res=>{
            console.log(res);
        });*/

        if(!resposta.ok){
            alert("Erro ao realizar a consulta");
            return;
        }
        const repositorios = await resposta.json();
        repositorios.forEach(element => {
            const itemLista = document.createElement('li');
            itemLista.textContent = element.name;
            listaRepositorios.appendChild(itemLista);
        });

        console.log("após a promisse");
    } catch (error) {
        
    }
status.innerText=("");
}