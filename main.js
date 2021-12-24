const Histograms = require('./Histogram');
const intitial = new Histograms.Histogram();
var file_system = require('fs');
var read_stream = file_system.createReadStream('./data2.txt',{encoding:'utf8'})


var write_stream = file_system.createWriteStream('./final_histogram.txt',{encoding:'utf8'});

read_stream.pipe(intitial).pipe(write_stream);