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

  _remove = function(key){
    
    let inikey = key;
    let hashed = hash(key);
    if(hashed in this.collection){

        delete this.collection[hashed][inikey];
        if(Object.keys(this.collection[hashed]).length < 1){
      delete this.collection[hashed];
    }
           
    } else {
      console.log('is not');
      return;
    }
}
}


const hashTable = new HashTable();
console.log(hashTable);
