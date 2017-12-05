exports.testObjects = [

  // * EXPOSURE RAMPING
  {
    name: 'Exposure Ramping',
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
      name: 'navigate to exposure ramping page',
      command: ['navigate', '#timelapse/expRamping'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'set exp ramping values',
      command: ['set', { type: 'eramp', value: [0, 5] }],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'toggle exp ramping',
      command: ['click', '#isBulbRamping'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'navigate to start exp view',
      command: ['navigate', '#timelapse/expRamping/startshutter'],
      assertion: undefined,
      timeout: 30000
    }, {
      name: 'go back',
      command: ['click', '.backLink'],
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
      name: 'verify Eramp (shutter)',
      command: ['listen'],
      assertion: 'setting shutter.',
      timeout: 3000000
    }, {
      name: 'verify Eramp (ISO)',
      command: ['listen'],
      assertion: 'setting ISO.',
      timeout: 3000000
    }]
  }
];
