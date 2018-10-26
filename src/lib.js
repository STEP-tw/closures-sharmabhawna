const makeConstant = function(arg) {
  return function(){
    return arg;
  }
}

const makeCounterFromN = function(arg){
  return function(){
    return arg++;
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(old){
  return trackDelta = function(delta = 0){
    let total = old + delta;
    if(delta < 0){
      return { old : old--, delta : delta, new : total };
    }
    return { old : old++, delta : delta, new : total }
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
  let firstNum = -arg1;
  let secondNum = arg2-1;
  if(arg2 == undefined){ firstNum = -arg1; secondNum = arg1; }
  if(arg1 == undefined && arg2 == undefined){ secondNum = 1; firstNum = -1; }
  return function(){
    let nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
    return nextNum;
  }
}

const curry = function(func, argument){
  return function(parameter1, parameter2){
    return func(argument, parameter1, parameter2);
  }
}

const compose = function(func1, func2){
  return function(arg1, arg2){
    return func1(func2(arg1, arg2));
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
