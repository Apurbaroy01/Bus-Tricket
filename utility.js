function hideElementById(ElementId){
    const element= document.getElementById(ElementId);
    element.classList.add('hidden');
}
function showElementById(ElementId){
    const element=document.getElementById(ElementId);
    element.classList.remove('hidden');
}

function set1(button){
    // set 1
    button.style.backgroundColor = 'green';
    
    
    const inputSet=document.getElementById('A-1');
    const inputSets=inputSet.value;
    const set=inputSets
    console.log(set);

    const displaySet=document.getElementById('input-set');
    displaySet.innerText=set;

    const displaySet1=document.getElementById('set');
    displaySet1.innerText=set;

    
    
}


function set2(button){
    button.style.backgroundColor = 'green';

    const inputSet2 = document.getElementById('A-2').value;
    console.log(inputSet2);
    document.getElementById('input-set-2').innerText = inputSet2;
    document.getElementById('sets2').innerText = inputSet2;
}
function set3(button){
    button.style.backgroundColor = 'green';

    const inputSet3 = document.getElementById('A-3').value;
    console.log(inputSet3);
    document.getElementById('input-set-3').innerText = inputSet3;
}
function set4(button){
    button.style.backgroundColor = 'green';

    const inputSet4 = document.getElementById('A-4').value;
    console.log(inputSet4);
    document.getElementById('input-set-4').innerText = inputSet4;
}

