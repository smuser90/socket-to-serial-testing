exports.testObjects = [

  // * CAMERA SETTINGS
  {
    name: 'Verify Camera Settings',
    instructions: [{
      name: 'navigate to camera settings page',
      command: ['navigate', '#settings/camera'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'verify shutter speed',
      command: ['camSetting', { setting: 'shutter', index: 17 }],
      assertion: 'Set Val :',
      timeout: 30000
    }, {
      name: 'verify aperture',
      command: ['camSetting', { setting: 'aperture', index: Math.floor(Math.random() * 3) + 5 }],
      assertion: 'Set Val :',
      timeout: 30000
    }, {
      name: 'verify iso',
      command: ['camSetting', { setting: 'iso', index: Math.floor(Math.random() * 1) + 4 }],
      assertion: 'Set Val :',
      timeout: 30000
    }]
  }
];
