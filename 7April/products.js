var productsArray = [];
var selectedIndex = -1;
function init(){
    document.getElementById("tablerows").innerHTML = "";
    if(localStorage.ProductRowId){
     productsArray =JSON.parse(localStorage.ProductRowId);
        for(var i=0;i< productsArray.length ;i++){
            createTable(i,productsArray[i].pid,productsArray[i].pname,productsArray[i].cname,productsArray[i].manu,productsArray[i].des,productsArray[i].price)
        }
    }
}
function Save(){
    var pid = document.getElementById("pid").value;
    var pname = document.getElementById("pname").value;
    var cname = document.getElementById("cname").value;
    var manu = document.getElementById("manu").value;
    var des = document.getElementById("des").value;
    var price = document.getElementById("price").value;

    var productsObj ={
         pid: pid,
        pname:pname,
        cname:cname,
        manu: manu,
        des:des,
        price:price

    };
    if(selectedIndex === -1){
    productsArray.push(productsObj);
    }else{
        productsArray.splice(selectedIndex, 1, productsObj);
    }
    localStorage.ProductRowId = JSON.stringify(productsArray);
 init();
 // validate();

  }
  function validate() {
     var isEmpty = false,
         pid = document.getElementById("pid").value,
         pname = document.getElementById("pname").value,
         cname = document.getElementById("cname").value,
         manu = document.getElementById("manu").value,
         des = document.getElementById("des").value,
         price = document.getElementById("price").value;
         

     if (pid === "") {
         console.log("Product ID is Mandatory");
         alert("Product ID is Mandatory");
         isEmpty = true;
     }

     if (pname === "") {
         console.log("Product Name is Mandatory");
         alert("Product Name is Mandatory");
         isEmpty = true;
     }

     if (cname === "") {
         console.log("Category Name is Mandatory");
         alert("Category Name is Mandatory");
         isEmpty = true;
     }
     if (manu === "") {
         console.log("Manufacturer Name is Mandatory");
         alert("Manufacturer Name is Mandatory");
         isEmpty = true;
     }
     if (des === "") {
         console.log("Description is Mandatory");
         alert("Description is Mandatory");
         isEmpty = true;
     }
     if (price === "") {
         console.log("Price is Mandatory");
         alert("Price is Mandatory");
         isEmpty = true;
     }
     if (price < 0) {
         console.log("Price can't be negative");
         alert("Price can't be negative");
         isEmpty = true;
     }
     return isEmpty;
 }

function createTable(index,pid,pname,cname,manu,des,price){
    if(!validate()){
 var table = document.getElementById("tablerows");
 var row = table = table.insertRow(-1);
 var pidCell = row.insertCell(0);
 var pnameCell = row.insertCell(1);
 var cnameCell = row.insertCell(2);
 var manuCell = row.insertCell(3);
 var desCell = row.insertCell(4);
 var priceCell = row.insertCell(5);
 var actionCell = row.insertCell(6);

 pidCell.innerHTML = pid;
 pnameCell.innerHTML = pname;
 cnameCell.innerHTML = cname;
 manuCell.innerHTML = manu;
 desCell.innerHTML = des;
 priceCell.innerHTML = price;
 actionCell.innerHTML = '<button  class="btn btn-primary" style="width:80px" onclick="Edit('+index+')">Edit</button><br/><button  class="btn btn-danger" style="width:80px; margin-top:1px" onclick="Delete('+index+')">Delete</button>';
 


}
}

function Delete(index){
    productsArray.splice(index,1);
    localStorage.ProductRowId  = JSON.stringify(productsArray);
    init();
}

function Clear(){
 selectedIndex=-1;
     document.getElementById("pid").value="";
    document.getElementById("pname").value="";
    document.getElementById("cname").value= "ECT";
    document.getElementById("manu").value= "HP";
    document.getElementById("des").value="";
    document.getElementById("price").value="";
    document.getElementById("submit").innerHTML="Save";

}

//    var selectedIndex = -1;
function Edit(index){
    selectedIndex=index;
    var productsObj = productsArray[index];
    document.getElementById("pid").value = productsObj.pid;
    document.getElementById("pname").value = productsObj.pname;
    document.getElementById("cname").value = productsObj.cname;
    document.getElementById("manu").value = productsObj.manu;
    document.getElementById("des").value = productsObj.des;
    document.getElementById("price").value = productsObj.price;
    document.getElementById("submit").innerHTML = "Update";
}

function search() {
var filter = document.getElementById('myInput').value.toUpperCase();
var table =document.getElementById('tablerows');
var rows = table.getElementsByTagName('tr');

 for (var i = 0; i < table.rows.length; i++) {
 var td= rows[i].getElementsByTagName('td')[0];
 if(td){
     let textValue = td.textContent || td.innerHTML;
     if(textValue.toUpperCase().indexOf(filter) > -1){
         rows[i].style.display= "";
     }else{
         rows[i].style.display = "none";
     }
 }

}

 }

