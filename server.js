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



