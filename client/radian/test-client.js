var testInit = function() {
  console.log("Connecting to the test server...");
  var socket = io.connect("http://10.1.10.124:48626");

  var pass = function(dataObject) {
    console.log("Returning result: Pass");

    // Default return object
    var resultObject = {
      result: 'pass',
      timestamp: Date.now(),
      type: '',
      value: ''
    };

    // If it's a specific data object, we pass that in as well.
    if (dataObject) {
      resultObject.value = dataObject.value;
      resultObject.type = dataObject.type;
    }

    socket.emit('result', resultObject);
  };

  var fail = function() {
    console.log("Returning result: Fail");
    socket.emit('result', {
      result: 'fail',
      timestamp: Date.now()
    });
  };

  // ********************************************************************************
  // * Actions the client responds to

  socket.on('connect', function() {
    console.log("Connected!");
  });

  socket.on('navigate', function(hash) {
    window.location.hash = hash;
    console.log("Navigating to: " + hash);
    setTimeout(pass, 500);
  });

  socket.on('click', function(element) {
    console.log("Clicking: " + element);
    pass();
    $(element).click();
  });

  socket.on('set', function(data) {
    var type = data.type;
    console.log("Setting: " + type);
    switch (type) {
      case 'duration':
        RadianApp.app.visibleTimeLapse.set({ 'totalTimeMinutes': data.value });
        RadianApp.app.visibleTimeLapse.set({ 'totalTimeHours': 0 });
        pass();
        break;

      case 'sramp':
        ChartMonotonic.mapToView(data.value);
        ChartMonotonic.addNewPoint(data.value[0], data.value[1]);
        pass();
        break;

      case 'eramp':
        RadianApp.app.visibleTimeLapse.set({'durationMinutes': 10});
        RadianApp.app.visibleTimeLapse.set({'durationHours': 0});
        modifiedShutterIndex = data.value[0];
        modifiedEndShutterIndex = data.value[1];
        modifiedIsoIndex = data.value[0];
        modifiedEndIsoIndex = data.value[1];

        // Send back erampVal array to testServer!
        var erampValues = [
          radianShutterArray[modifiedShutterIndex],
          radianShutterArray[modifiedEndShutterIndex],
          radianISOArray[modifiedIsoIndex],
          radianISOArray[modifiedEndIsoIndex]
        ];

        var dataObject = { type: 'erampValues', value: erampValues };
        pass(dataObject);
        break;
    }
  });

  socket.on('query', function(data) {
    var type = data.type;
    console.log("Querying: " + type);
    switch (type) {
      case 'interval':
        var interval = RadianApp.app.visibleTimeLapse.get('intervalSeconds') * 1000;
        var dataObject = { type: 'interval', value: interval };
        break;

      case 'duration':
        var runningTimeLapse = RadianApp.app.getRunningTimeLapse();
        var duration = runningTimeLapse.getTimeLapseInSeconds() * 1000;
        var dataObject = { type: 'duration', value: duration };
        break;

      case 'totalPhotos':
        var runningTimeLapse = RadianApp.app.getRunningTimeLapse();
        var totalPhotos = runningTimeLapse.getStats().totalPhotos;
        var dataObject = { type: 'totalPhotos', value: totalPhotos };
        break;
    }
    pass(dataObject);
  });

  socket.on('verify_thumb', function() {
    console.log("Verifying thumbnail...");
    setTimeout(function() {
      if (thumbSuccess == true) {
        pass();
        thumbSuccess = false;
      }
    }, 25000);
  });

  socket.on('camSetting', function(data) {
    var setting = data.setting;
    var index = data.index;
    var dataObject = { type: "cameraSetting", value: 0 };

    switch(setting) {
      case 'shutter':
        console.log('Testing Shutter...');
        for (var i = 0; i < index; i++) shutterFrame.next();
        dataObject.value = GetShutterCode(index);
        pass(dataObject);
        break;

      case 'aperture':
        console.log('Testing Aperture...');
        for (var i = 0; i < index; i++) apertureFrame.next();
        dataObject.value = GetApertureCode(index);
        pass(dataObject);
        break;

      case 'iso':
        console.log('Testing ISO...');
        for (var i = 0; i < index; i++) isoFrame.next();
        dataObject.value = GetIsoCode(index);
        pass(dataObject);
        break;
    }
  });

  socket.on('resetSetting', function(data) {
    var setting = data.setting;
  })
};
