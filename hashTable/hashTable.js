class HashTable {
  constructor() {
    this.table = new Array(11);
    this.size = 0;
  }

  // hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }
  _countFre(S) {
    for (let c = a; c <= z; ++c) {
      let frequency = 0;
      for (let i = 0; i < S.length(); ++i) if (S[i] == c) frequency++;
    }
  }
}

const hashTable = new HashTable();
console.log(hashTable);
