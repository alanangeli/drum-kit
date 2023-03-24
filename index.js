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
        
        var buttonInnerHtml = this.innerHtml;

        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break; 

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom3.play();
                break;
                
