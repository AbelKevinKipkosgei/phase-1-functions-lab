// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let blockDistance;
  const scuberHq = 42;
  if (someValue >= scuberHq) {
    blockDistance = someValue - scuberHq;
  } else {
    blockDistance = scuberHq - someValue;
  }
  return blockDistance;
}
function distanceFromHqInFeet(someValue) {
  const blockLength = 264;
  let blockNumber = distanceFromHqInBlocks(someValue);
  let feetDistance = blockNumber * blockLength;
  return feetDistance;
}
function distanceTravelledInFeet(start, destination) {
  const blockLength = 264;
  let blockDistanceTravelled;
  let blockDistanceTravelledInFeet;
  if (destination >= start) {
    blockDistanceTravelled = destination - start;
  } else {
    blockDistanceTravelled = start - destination;
  }
  blockDistanceTravelledInFeet = blockDistanceTravelled * blockLength;
  return blockDistanceTravelledInFeet;
}
function calculatesFarePrice(start, destination) {
  const blockLength = 264;
  let FarePrice;
  let blockDistanceTravelledInFeet = distanceTravelledInFeet(
    start,
    destination
  );
  if (blockDistanceTravelledInFeet <= 400) {
    FarePrice = blockDistanceTravelledInFeet * 0;
  } else if (
    blockDistanceTravelledInFeet > 400 &&
    blockDistanceTravelledInFeet <= 2000
  ) {
    FarePrice = (blockDistanceTravelledInFeet - 400) * 0.02;
  } else if (
    blockDistanceTravelledInFeet > 2000 &&
    blockDistanceTravelledInFeet <= 2500
  ) {
    FarePrice = 25;
  } else {
    FarePrice = "cannot travel that far";
  }
  return FarePrice;
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
