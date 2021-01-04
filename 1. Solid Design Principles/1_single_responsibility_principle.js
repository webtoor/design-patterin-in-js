const fs = require('fs');

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

   /*  save(){
        fs.writeFileSync(filename, this.toString());
    }

    load(filename){

    }

    loadfromUrl(url){

    } */
}

Journal.count = 0;

class PersistenceManage {

    prepocess() {
        //
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString()); 
    }
}

let j = new Journal();
j.addEntry('I cried today');
j.addEntry('Happy new year 2021');
console.log(j.toString());

let p = new PersistenceManage();
let filename = './journal.txt';
p.saveToFile(p, filename);

//separation of concerns