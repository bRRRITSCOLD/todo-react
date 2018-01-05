export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (fnF, fnG) => (...args) => fnG(fnF(...args));

export const pipe = (...fns) => fns.reduce(_pipe);
