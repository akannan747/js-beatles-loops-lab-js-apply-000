// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  let i = num;
  do {
    arr.push("I love the Beatles!");
    i++;
  } while (i < 15)
}