


function runTime(x){
    
    var currTime = 50; 
    var timeout = 5000;
        
            for(i=0;i<11;i++){
                

        IntervalID[i] = setTimeout(function(){
            if( currTime == 0){
                x.innerHTML = currTime
                alert("Blastoff");
            }
            else if( currTime < 25 ){
                x.innerHTML = "Warning Less Than Half Way To Launch, Time Left = " + currTime

            }
            else {
                x.innerHTML = currTime
            }
            currTime = currTime - 5;
        },timeout);
        timeout = timeout + 1000;

    }
} 
var IntervalID = new Array();

function startButton(){
    document.getElementById("buttonStart").disabled = true;
    document.getElementById("buttonStop").disabled = false;
    runTime(document.getElementById("displayCountdown"))
}
function stopButton(){
    document.getElementById("buttonStart").disabled = false;
    document.getElementById("buttonStop").disabled = true;

    for(i=0; i<11;i++){
        clearTimeout(IntervalID[i]);
    }
}

    function getInput(){
        do{
    
                FirstName = prompt("First Name: ");
                LastName= prompt("Last Name: ");
    
                FullName = FirstName + " " + LastName;
    
              if(FullName.length > 20){
                alert("Name too long")
           };
        }
        while(FullName.length > 20);

        do{
            Badge= prompt("Pick an number 1-999")
            if(Badge > 1000){
                alert("Badge number incorect")
            }
        }
        while(Badge > 20);
    }
