exports.testObjects = [

  // * TOTAL PHOTOS
  {
    name: 'Total Photos',
    instructions: [{
      name: 'verify total photos',
      command: ['query', { type: 'totalPhotos'}],
      assertion: 'TL_StartPhoto',
      timeout: 30000000
    }]
  }
];
