export const debounce = (func, delay) => {
  let timerId;
  const debouncedFunction = function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(context, args), delay);
  };

  debouncedFunction.cancel = () => {
    clearTimeout(timerId);
  };

  return debouncedFunction;
};