const {Transform} = require('stream');

class Histogram extends Transform {
    constructor(counts={}){
        super();
        this.counts = counts;
}

_transform(chunk, encoding = 'utf8', callback){
    
    chunk = chunk.toString();
    var words = chunk.split(/[" ","\n","\r"]/);
    for (let i = 0;i<words.length;i++){
        if (this.counts[words[i]]){
            this.counts[words[i]]++;
        }
        else{
            this.counts[words[i]] = 1;
        }
    }
    this.push(JSON.stringify(this.counts));
}

}

module.exports = { Histogram }


