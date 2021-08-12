console.log("Hey were are in our javascript file")

var helloButton = document.getElementById('hello');

helloButton.addEventListener('click', function(){
    console.log("hey we clicked the hello button")
    alert("hey we clicked the hello button")
})