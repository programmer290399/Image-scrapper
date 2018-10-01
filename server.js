let {PythonShell} = require('python-shell')
const spawn = require('cross-spawn');
const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

let options = {
    mode: 'text',
    pythonPath: 'C:/Users/SAAHIL/AppData/Local/Programs/Python/Python37/python.exe',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'D:/21-18/desktop/rps/python-node-integration',
    args: ['Paneer Achari']
  };

  PythonShell.run('scrape_images.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });


// var PythonShell = require('python-shell');

// var options = {
//     mode: 'text',
//     args: ['my First Argument']
// };

// PythonShell.run('script.py', options, function (err, results) {
//     if (err) throw err;
//     // results is an array consisting of messages collected during execution
//     console.log('results: %j', results);
// });


// // The path to your python script
// var myPythonScript = "D:/21-18/desktop/rps/python-node-integration";
// // Provide the path of the python executable, if python is available as environment variable then you can use only "python"
// var pythonExecutable = "C:/Users/SAAHIL/AppData/Local/Programs/Python/Python37/python.exe";

// // Function to convert an Uint8Array to a string
// var uint8arrayToString = function(data){
//     return String.fromCharCode.apply(null, data);
// };

// const spawn = require('child_process').spawn;
// const scriptExecution = spawn(pythonExecutable, [myPythonScript]);

// // Handle normal output
// scriptExecution.stdout.on('data', (data) => {
//     console.log(uint8arrayToString(data));
// });

// // Handle error output
// scriptExecution.stderr.on('data', (data) => {
//     // As said before, convert the Uint8Array to a readable string.
//     console.log(uint8arrayToString(data));
// });

// scriptExecution.on('exit', (code) => {
//     console.log("Process quit with code : " + code);
// });
