
import "../style.css"

const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback: (a: number) => number = (a) => {
  return 100 + a;
};

console.log(age, username, toggle, empty, callback(5));
