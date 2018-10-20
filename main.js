var fs = require("fs");
var words = fs.readFileSync("Input.txt").toString();
var splitChars = /[\W]/g;
words = words.split(splitChars);

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
var unique = words.filter(onlyUnique);

var number=[];
for(var Word of unique){
    function checkWord(words) {
        return words == Word;
    }
    var x = unique.indexOf(Word);
    number[x] = (words.filter(checkWord)).length;
}

var done= false;
while(!done){
    done=true;
    for(var i= 1; i< number.length; i++){
        if(number[i-1]< number[i]){
            done=false;
            var temp = number[i-1];
            var temp2 = unique[i-1];
            number[i-1]=number[i];
            unique[i-1]=unique[i];
            number[i]=temp;
            unique[i]=temp2;
        }
    }
}

let writeStream = fs.createWriteStream('Output.txt');
for(var a = 1; a< unique.length;a++){
    var write="Number: " + number[a] + " Word: " + unique[a];
    writeStream.write(write + "\n", 'UTF-8');      
}

writeStream.on('finish', () => {  
    console.log('Wrote all data to file');
});
writeStream.end();  



