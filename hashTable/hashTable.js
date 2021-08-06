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
}

const hashTable = new HashTable();
console.log(hashTable);