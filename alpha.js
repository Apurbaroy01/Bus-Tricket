
function nextpage(){
    hideElementById('button');
    showElementById('tricket-section');
    // showElementById('tricket-count')
    // continueGame();
}
function  continueGame(){
    // show Element------
    hideElementById('tricket-section');
    showElementById('tricket-count');
    hideElementById('footers')

// input passenger name----
    const input=document.getElementById('input-name');
    const inputs=input.value;
    const base=inputs;
    console.log(base);

    const outputs= document.getElementById('name');
    outputs.innerText=base;
    // input Address------


    const inputElement = document.getElementById('input-Address');
    const displayElement = document.getElementById('Address');

    if (inputElement && displayElement) {
        const nameValue = inputElement.value;
        console.log(nameValue);
        displayElement.innerText = nameValue;
    // } else {
    //     console.error("Element(s) not found.");
    }
    // number----------
    const inputNumber= document.getElementById('input-number');
    const inputNumbers= inputNumber.value;
    const outputNumbers=inputNumbers
    console.log(outputNumbers);

    const displayNumber=document.getElementById('Number');
    displayNumber.innerText=outputNumbers;
    //  destination--------------------
    const inputDastination= document.getElementById('input-Destination');
    const dastination=inputDastination.value;
    const destination=dastination;
    console.log(destination);

    const displayDestination=document.getElementById('city');
    displayDestination.innerText=destination;

    // or---------
    const inputCity=document.getElementById('input-city')
    const inputCitys=inputCity.value;
    const city=inputCitys
    console.log(city);

    const displayCity=document.getElementById('toCity');
    displayCity.innerText=city;
    // time-------------

    const inputTime= document.getElementById('input-time');
    const InputTimes=inputTime.value;
    const Times=InputTimes
    console.log(Times);

    const DisplayTime=document.getElementById('time');
    DisplayTime.innerText=Times;

    // date-----------
    const inputDate=document.getElementById('input-date');
    const inputDates=inputDate.value;
    const date=inputDates;
    console.log(date);

    const DisplayDate= document.getElementById('date');
    DisplayDate.innerText=date;

    const countSet=document.getElementById('input-sets');
    const numberSet=countSet.value;
    const sets=numberSet;
    console.log(sets);

    const inputTk=document.getElementById('input-price');
    const inputTaka=inputTk.value;
    const tks=inputTaka;
    console.log(tks);

    const totalTk= sets*tks;
    const total=totalTk
    console.log(total)

    const displaySet= document.getElementById('tk');
    displaySet.innerText=total;



    

    
}