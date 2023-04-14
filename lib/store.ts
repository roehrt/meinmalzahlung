const data = {};

export function store(userid, hash) {
  data[userid] = hash;
}

export function retrieve(userid) {
  return data[userid];
}
