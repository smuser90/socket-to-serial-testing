exports.testObjects = [

  // * DURATION
  {
    name: 'Duration',
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
      command: ['wait', 8000],
      assertion: undefined,
      timeout: 10000
    }, {
      name: 'verify total duration',
      command: ['query', { type: 'duration' }],
      assertion: 'Done with timelapse',
      timeout: 30000000
    }]
  }
];
