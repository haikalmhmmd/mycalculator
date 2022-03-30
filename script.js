function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(number) {
    return document.getElementById("history-value").innerText=number;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(number) {
    if(number=="") {
        document.getElementById("output-value").innerText=number;
    } else {
        document.getElementById("output-value").innerText=getFormattedNumber(number);
    }
    
}

function getFormattedNumber(number) {
    if(number == "-") {
        return "";
    }
    var n = Number(number);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(number) {
    return Number(number.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if(this.id=="all-clear") {
            printHistory("");
            printOutput("");
        }
        if(this.id=="delete") {
        var output = reverseNumberFormat(getOutput()).toString();
           if(output) { // jika output adalah nilai
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if(output == "" && history != "") {
                if(isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1);
                }
            }
            if(output != "" || history != "") {
                // jika kondisi true:false
                output= output == ""?
                output:reverseNumberFormat(output);
                history=history+output;
                if(this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN) { // jika outputnya adalah nomor
            output = output + this.id;
            printOutput(output);
        }
    });
}