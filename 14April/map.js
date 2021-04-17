let dataMap = new Map();
let c1 ={cid:1,cname:'ECT'};
let c2 ={cid:2,cname:'ECL'};
let c3 ={cid:3,cname:'FOOD'};
// let c4= document.getElementById("cid")
dataMap.set(c1,[{pid:1,pname:'Laptop'}])
dataMap.set(c2,[{pid:2,pname:'Mobile'}])
dataMap.set(c3,[{pid:3,pname:'Cadbury'}])
//dataMap.set(c4,[])
console.log(dataMap);
var data = dataMap.entries();
console.log("Data is");
for(var d of data)
console.log(d);
var getKeys = dataMap.keys();

console.log(`Value at key = ${JSON.stringify(dataMap.get(c1))}`);
console.log(`Value at key = ${JSON.stringify(dataMap.get(c2))}`);
console.log(`Value at key = ${JSON.stringify(dataMap.get(c3))}`);



function  add(cid,cname,pid,pname) {

    var table = document.getElementById("table1"),
 newRow = table.insertRow(table.length),
 r1 = newRow.insertCell(0),
 r2 = newRow.insertCell(1),

 cid = document.getElementById("cid").value,
cname = document.getElementById("cname").value

r1.innerHTML = cid;
r2.innerHTML = cname;

var tableNew = document.getElementById("table2"),
 newRows = tableNew.insertRow(tableNew.length),
 row1 = newRows.insertCell(0),
 row2 = newRows.insertCell(1),

pid = document.getElementById("pid").value,
pname = document.getElementById("pname").value

row1.innerHTML = pid;
row2.innerHTML = pname;

let c1 = {cid:1,cname:'ECL'};
let c2 = {cid:2,cname:'ECT'};
c3=[{key:'c3', cid:3,cname:'ECL', pid:5,pname:'keyboard'},{key:'c4', cid:4,cname:'ECT', pid:6,pname:'mouse'}]
 max=c3.length
let key=`c${max}`
let val={"key":key, "cid":cid,"cname":cname,"pid":pid,"pname":pname }
console.log(val)
c3.push(val);
dataMap.set(c1, [{pid:5,pname:'laptop'},{pid:6,pname:'camera'}]);
dataMap.set(c2, [{pid:7,pname:'chocolate'},{pid:8,pname:'mobile'}]);
console.log(c3);
//  dataMap.set(c1, [{pid:5,pname:'laptop'},{pid:6,pname:'camera'}]);
//  dataMap.set(c2, [{pid:7,pname:'chocolate'},{pid:8,pname:'mobile'}]);
return c3;

}



