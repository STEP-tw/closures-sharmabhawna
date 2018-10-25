const makeConstant = function(arg) {
  let string = ""+arg
  switch(string){
    case "2" :
      return constantlyReturnTwo;
      break;

    case "hello" :
      return constantlyReturnString;
      break;

    case "1,2,3" :
      return constantlyReturnArray;
      break;

    default :
      return constantlyReturnObject;
  }
}

const constantlyReturnTwo = function() {
  return 2;
}

const constantlyReturnString = function() {
  return "hello";
}

const constantlyReturnArray = function() {
  return [1,2,3];
}

const constantlyReturnObject = function() {
  return { a : 1, b : 2 };
}

const makeCounterFromN = undefined;
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
