export const throttle = (func, ms) => {
  let isThrottled = false,
    savedArgs,
    savedThis,
    timeoutId;

  const wrapper = function () {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    timeoutId = setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };

  wrapper.__proto__.cancel = function () {
    clearTimeout(timeoutId);
  };

  return wrapper;
};

export const permutations = function* (elements) {
  if (elements.length === 1) {
    yield elements;
  } else {
    let [first, ...rest] = elements;
    for (let perm of permutations(rest)) {
      for (let i = 0; i < elements.length; i++) {
        let start = perm.slice(0, i);
        let rest = perm.slice(i);
        yield [...start, first, ...rest];
      }
    }
  }
};

export const split = (array, chunks) => {
  const perChunk = Math.round(array.length / chunks);
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};
