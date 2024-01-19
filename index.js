let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.splice(-1)
}

function destructivelyRemoveFirstCat() {
  cats.splice(0,1)
}

function appendCat(name) {
  return [...cats, name]
}

function prependCat(name) {
  return [name, ...cats]
}

function removeLastCat() {
  return cats.slice(0, -1)
}

function removeFirstCat() {
  return cats.slice(1)
}// Write your solution here!
