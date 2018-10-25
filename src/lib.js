const makeConstant = function(arg) {
  return function(){
    return arg;
  }
}

const makeCounterFromN = function(arg){
  let count = -1;
  return function(){
    count++;
    return arg+count;
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

const makeFiboGenerator = undefined;
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
