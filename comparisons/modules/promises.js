module.exports = function promise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, time);
  });
};
