var lib = require('./instruction-library.js');

exports.testObjects = [

  // * TIMELAPSE
  {
    name: 'Basic Timelapse',
    instructions: [
      lib.tapMenu,
      lib.wait1,
      lib.tapMenuItemTL,
      lib.wait1,
      lib.startTL
    ]
  }
];
