function solution(str, ending) {
  let end = "";
  for (i = ending.length; i > 0; i--) {
    end += str[(str.length - i)];
  }
  return end === ending;
}
