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

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getItems = (count) => new Array(count).fill(null).map((_, i) => i);

const getSubsets = (arr) =>
  arr
    .reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
      [[]]
    )
    .slice(1);

const intersect = (arr1, arr2) => arr1.some((x) => arr2.includes(x));

const addSubset = (partition, additions) => {
  const subsets = additions.filter(
    (addition) => !partition.find((subset) => intersect(subset, addition))
  );
  return [
    ...(subsets.length ? [] : [partition]),
    ...subsets
      .map((subset) => addSubset([...partition, subset], additions))
      .flat(),
  ];
};

export const getPartitions = (count) => {
  const items = getItems(count);
  const subsets = getSubsets(items);
  const initials = subsets.filter((subset) => !subset[0]);
  const additions = subsets.filter((subset) => subset[0]);
  return initials.map((subset) => addSubset([subset], additions)).flat();
};

export const memoize = (func) => {
  const memo = {};
  const slice = Array.prototype.slice;
  return function () {
    const args = slice.call(arguments);
    if (args in memo) return memo[args];
    else return (memo[args] = func.apply(this, args));
  };
};
