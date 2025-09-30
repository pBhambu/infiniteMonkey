var word =""
var prob = 0
function getProb(){
    let input = document.getElementById("phrase").value
    word = input
    console.log(word.length)
    prob = Math.pow(26,word.length)
    console.log("1/" + prob)
    const output = document.getElementById('proba');
    output.readOnly = false;
    output.value = "1/"+prob
}


