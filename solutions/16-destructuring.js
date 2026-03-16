const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  let [nearestLocation] = locations;

  for (const location of locations) {
    let [, coordinatesLocation] = location;
    let [, coordinatesNearestLocation] = nearestLocation;
    
    if (getDistance(coordinatesNearestLocation, currentPoint) > getDistance(coordinatesLocation, currentPoint)) {
      nearestLocation = location;
    }
  }

  return nearestLocation;
};

export { getTheNearestLocation };
// END
