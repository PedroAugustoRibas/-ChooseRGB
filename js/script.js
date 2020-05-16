var currentR= 0;
var currentG= 0;
var currentB= 0;
window.addEventListener('load',start);

function start(){ 
    var colorDiv = document.querySelector('#bloco-color');
    colorDiv.style.backgroundColor = 'rgb('+currentR+','+currentG+','+currentB+')';

    var R = document.querySelector('#R');
    var G = document.querySelector('#G');
    var B = document.querySelector('#B');
    
    var inputR = document.querySelector('#inputR');
    var inputG = document.querySelector('#inputG');
    var inputB = document.querySelector('#inputB');
    
    R.value = 0;
    G.value = 0;
    B.value = 0;

    R.addEventListener('change',function(event){
        inputR.value = event.target.value;
        var currentR=  inputR.value;
        colorDiv.style.backgroundColor = 'rgb('+currentR+','+currentG+','+currentB+')'
    });
    G.addEventListener('change',function(event){
        inputG.value = event.target.value;
        currentG=  inputG.value;
        colorDiv.style.backgroundColor = 'rgb('+currentR+','+currentG+','+currentB+')'
    });
    B.addEventListener('change',function(event){
        inputB.value = event.target.value;
        currentB=  inputB.value;
        colorDiv.style.backgroundColor = 'rgb('+currentR+','+currentG+','+currentB+')'
    });


    





}