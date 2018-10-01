let {PythonShell} = require('python-shell')
const spawn = require('cross-spawn'); // Completely optional , I used this to avoid cross-platform issues 
const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

let options = {
    mode: 'text',
    pythonPath: 'C:/Users/SAAHIL/AppData/Local/Programs/Python/Python37/python.exe', //Insert your python path here
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'D:/21-18/desktop/rps/python-node-integration', // Insert the folder path where you saved the .py file 
    args: ['Paneer Achari'] // Insert the argument(Dish Name) here 
  };

  PythonShell.run('scrape_images.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });

//This will downlod the images also you will get back the local URL where your image is saved on the machine , 
//from there you can simply send that image to MongoDB or any other database 

