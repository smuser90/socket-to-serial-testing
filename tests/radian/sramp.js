exports.testObjects = [

  // * SPEED RAMPING
  {
    name: 'Speed Ramping',
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
      name: 'set duration',
      command: ['set', { type: 'duration', value: 10 }],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'navigate to speed ramping page',
      command: ['navigate', '#timelapse/speedramping'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'set ramping',
      command: ['set', { type: 'sramp', value: [5, 45] }],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'go back',
      command: ['click', '#previous'],
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
      name: 'detect speed ramping',
      command: ['listen'],
      assertion: '#steps actually taken:',
      timeout: 3000000
    }]
  }
];
