'use strict';

const decode = function (breaking_code) {
  let result = '';
  const newCode = breaking_code.split(' ');
  const code = function (word) {
    const keys = {a: 2, b: 3, c: 4, d: 5}; {
      if (word[0] in keys) {
        return word[keys[word[0]]-1];
      } else {
        return ' ';
      }
    }
  };
  for (let i = 0; i < newCode.length; i++) {
    result += code(newCode[i]);
  }
  return result;
};
console.log(decode('craft block argon meter bells brown croon droop'));