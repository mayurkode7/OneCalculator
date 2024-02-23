import { evaluate } from 'mathjs';
export const compute = (operation) => {
  return parseFloat(evaluate(operation).toFixed(2)).toLocaleString('hi-IN');
};
