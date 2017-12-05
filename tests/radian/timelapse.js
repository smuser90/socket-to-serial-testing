exports.testObjects = [

  // * TIMELAPSE
  {
    name: 'Basic Timelapse',
    instructions: [{
      name: 'navigate home',
      command: ['navigate', 'home'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'click new TL',
      command: ['click', '#newTimeLapse'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'navigate to upload',
      command: ['navigate', '#timelapse/upload'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'validate TL packet',
      command: ['click', '#timelapse'],
      assertion: 'valid_pkt',
      timeout: 30000
    }, {
      name: 'wait...',
      command: ['wait', 15000],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'pause TL',
      command: ['click', '#stopTimelapse'],
      assertion: 'tl_paused: Entry',
      timeout: 30000
    }, {
      name: 'wait...',
      command: ['wait', 5000],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'resume TL',
      command: ['click', '#stopTimelapse'],
      assertion: 'tl_paused: Unpause',
      timeout: 30000
    }]
  },

  // * PHOTOS
  {
    name: 'Take Photos',
    instructions: [
      {
      name: 'detect photos',
      command: undefined,
      assertion: 'TL_StartPhoto',
      timeout: 30000
    }]
  }
];
