var file_system = require('fs');

var read_stream = file_system.createReadStream('./data.txt',{encoding:'utf8'})

var counts = {}
read_stream.on('data',function(datachunk){
    
    var words = datachunk.split(/[" ","\n","\r"]/);

    for (let i = 0;i<words.length;i++){
        if (counts[words[i]]){
            counts[words[i]]++;
        }
        else{
            counts[words[i]] = 1;
        }
    }
    
})

read_stream.on('end', function give_histogram(){
    console.log('The histogram is as follows...');
    console.log(counts);
    var write_stream = file_system.createWriteStream('./final_histogram.txt',{encoding:'utf8'});
    write_stream.write(JSON.stringify(counts))
  });


