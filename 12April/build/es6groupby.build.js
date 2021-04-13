var products = [{
  'pid': 'p1',
  'pname': 'laptop',
  'cname': 'ecl',
  'mname': 'ibm',
  'des': 'good',
  'price': '1000'
}, {
  'pid': 'p2',
  'pname': 'mobile',
  'cname': 'ect',
  'mname': 'tata',
  'des': 'best',
  'price': '2000'
}, {
  'pid': 'p1',
  'pname': 'laptop',
  'cname': 'ecl',
  'mname': 'ibm',
  'des': 'good',
  'price': '1000'
}, {
  'pid': 'p3',
  'pname': 'cadbury',
  'cname': 'food',
  'mname': 'parle',
  'des': 'best',
  'price': '3000'
}, {
  'pid': 'p4',
  'pname': 'camera',
  'cname': 'ect',
  'mname': 'tata',
  'des': 'good',
  'price': '1000'
}, {
  'pid': 'p2',
  'pname': 'mobile',
  'cname': 'ect',
  'mname': 'tata',
  'des': 'best',
  'price': '2000'
}, {
  'pid': 'p4',
  'pname': 'camera',
  'cname': 'ect',
  'mname': 'tata',
  'des': 'good',
  'price': '1000'
}];

function createTable() {
  var col = [];

  for (var i = 0; i < products.length; i++) {
    for (var key in products[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  var table = document.createElement("table");
  var tr = table.insertRow(-1); // table row.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th"); // table header.

    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  for (var i = 0; i < products.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = products[i][col[j]];
    }
  }

  var divShowTable = document.getElementById('showTable');
  divShowTable.innerHTML = "";
  divShowTable.appendChild(table);
}

function searchFun() {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let showTable = document.getElementById('showTable');
  let tr = showTable.getElementsByTagName('tr');

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td')[1];

    if (td) {
      let textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function remove() {
  var data = {};
  $('table tr').each(function () {
    var txt = $(this).text();
    if (data[txt]) $(this).remove();else data[txt] = true;
    console.log(txt);
  });
  console.log(this.remove);
}

function groupBy(sourceArray, name) {
  return sourceArray.reduce((prod, obj) => {
    let groupKey = obj[name];

    if (!prod[groupKey]) {
      prod[groupKey] = [];
    }

    prod[groupKey].push(obj);
    return prod;
  }, {});
}

let groupResult = groupBy(products, 'cname');
console.log(`Result of Groups=${JSON.stringify(groupResult)}`);
let groupResult1 = groupBy(products, 'mname');
console.log(`Result of Groups=${JSON.stringify(groupResult1)}`);
