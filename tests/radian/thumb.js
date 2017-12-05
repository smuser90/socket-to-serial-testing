exports.testObjects = [

  // * THUMBNAILS
  {
    name: 'Verify Thumbnails',
    instructions: [{
      name: 'navigate to timelapse page',
      command: ['navigate', '#timelapse/upload'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'request thumbnail',
      command: ['click', '.preview'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'bypass thumbnail modal',
      command: ['click', '#get-thumb'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'verify thumbnail request',
      command: undefined,
      assertion: 'usb_thumb: Init',
      timeout: 30000
    }, {
      name: 'check for valid thumbnail',
      command: ['verify_thumb'],
      assertion: undefined,
      timeout: 40000
    }]
  }
];
