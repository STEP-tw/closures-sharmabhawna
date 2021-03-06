const makeConstant = function(constant) {
  return function(){
    return constant;
  }
}

const makeCounterFromN = function(initialCounter){
  return function(){
    return initialCounter++;
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(old){
  return trackDelta = function(delta = 0){
    let current = old+delta;
    old = current;
    return { old : current-delta, delta : delta, new : current}
  }
}

const makeCycler = function(array){
  let index = 0;
  newArray = array.map(function (n) { return n } );
  let length = newArray.length;
  return function(){
    return newArray[index++ % length];
  }
}

const makeFiboGenerator = function(arg1, arg2){
  let preValue = -arg1;
  let currValue = arg2-1;
  if(arg2 == undefined){ preValue = -arg1; currValue = arg1; }
  if(arg1 == undefined && arg2 == undefined){ preValue = -1; currValue = 1; }
  return function(){
    let nextValue = preValue + currValue;
    preValue = currValue;
    currValue = nextValue;
    return nextValue;
  }
}

const curry = function(func, argument){
  return function(parameter1, parameter2){
    return func(argument, parameter1, parameter2);
  }
}

const compose = function(outerFunc, innerFunc){
  return function(arg1, arg2){
    return outerFunc(innerFunc(arg1, arg2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
