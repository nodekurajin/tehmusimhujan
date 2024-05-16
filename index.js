function teaBoilTimer(boilTime, callback) {
    // Ensure boilTime is a number and positive
    if (typeof boilTime !== 'number' || boilTime <= 0) {
      throw new Error('boilTime must be a positive number');
    }
  
    console.log(`Starting tea timer for ${boilTime} minutes`);
  
    // Convert minutes to milliseconds
    const timeInMilliseconds = boilTime * 60 * 1000;
  
    // Use setTimeout to simulate the timer
    setTimeout(() => {
      console.log('Your tea is ready!');
      if (callback) {
        callback();
      }
    }, timeInMilliseconds);
  }
  
  // Example usage
  teaBoilTimer(3, function() {
    console.log('Pour your tea and enjoy!');
  });
  