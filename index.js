//document.querySelector("button").addEventListener("click", handleClick);
//
//function handleClick() {
//    alert("Eu fui clicado")
//}

//** Uma forma seria chamar a função handleClick. Outra forma, é criando uma função anônima ao invés de chamar a função
//handleClick **

//document.querySelector("Button").addEventListener("click", function(){
//    alert ("Eu fui clicado!");
//});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("Eu fui clicado!");
    });
}

