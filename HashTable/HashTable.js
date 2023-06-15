class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    if (this.get(key)) return;

    const index = this._hash(key);

    const entry = this.keyMap[index] || [];
    entry.push([key, value]);

    this.keyMap[index] = entry;
    return index;
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      const entry = this.keyMap[index].find(([first]) => first === key);
      if (entry instanceof Array) return entry[1];
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const entries = this.keyMap[i] || [];
      for (let j = 0; j < entries.length; j++) {
        keysArr.push(entries[j][0]);
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        const entries = this.keyMap[i];
        for (let j = 0; j < entries.length; j++) {
          const isDuplicateEntry = valuesArr.includes(entries[j][1]);
          if (!isDuplicateEntry) valuesArr.push(entries[j][1]);
        }
      }
    }
    return valuesArr;
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

const ht = new HashTable(17);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

console.log(ht.values());
