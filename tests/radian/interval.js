exports.testObjects = [

  // * INTERVAL
  {
    name: 'Intervals',
    instructions: [{
      name: 'verify interval',
      command: ['query', { type: 'interval', goal: 4 }],
      assertion: 'TL_StartPhoto',
      timeout: 300000
    }]
  },
];
