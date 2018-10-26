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
  let count = 0;
  return function(){
    return count++;
  }
}

const makeDeltaTracker = function(old){
  let count = 0;
  return trackDelta = function(delta){
    let oldDeltas = old + count;
    let deltas = delta;
    if(delta == undefined){
      deltas = 0;
    }
    let newDeltas = oldDeltas + deltas;
    if(delta > 0){
      count++;
    }
    if(delta < 0){
      count--;
    }
    return { old : oldDeltas, delta : deltas, new : newDeltas }
  }
}

const makeCycler = function(array){
  let count = 0;
  let args = [];
  for(let i = 0; i < array.length; i++){
    args.push(array[i]);
  }
  let preLength = args.length;
  return function(){
    let index = count % preLength;
    count++;
    return args[index];
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
