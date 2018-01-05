import { partial, pipe } from './utils';

const add = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;
const inc1 = (num) => num + 1;
const dbl1 = (num) => num + 2;

test('partial applies the first argument ahead of time', () => {
  const inc2 = partial(add, 1);
  const result = inc2(2);
  expect(result).toBe(3);
})

test('partial applies multiple arguments ahead of time', () => {
  const inc2 = partial(addThree, 1, 3);
  const result = inc2(2);
  expect(result).toBe(6);
})

test('pipe passes the results of inc1 to dbl1', () => {
  const pipeline = pipe(inc1, dbl1);
  const result = pipeline(3);
  expect(result).toBe(6);
})

test('pipe passes the results of dbl1 to inc1', () => {
  const pipeline = pipe(dbl1, inc1);
  const result = pipeline(2);
  expect(result).toBe(5);
})

test('pipe works with more than two functions', () => {
  const pipeline = pipe(add, inc1, dbl1, inc1);
  const result = pipeline(1, 2);
  expect(result).toBe(7);
})
