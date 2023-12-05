// Part 3: Thinking Critically

function incrementAge(obj) {
  if (!obj.age) {
    obj.age = 0;
  }
  obj.age++;
  obj.updated_at = new Date();
}

function incrementAgeAndCopy(obj) {
  if (!obj.age) {
    obj.age = 0;
  }
  const copy = { ...obj };
  copy.age++;
  copy.updated_at = new Date();
  return copy;
}