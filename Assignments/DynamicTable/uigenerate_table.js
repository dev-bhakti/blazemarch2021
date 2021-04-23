class UIGenerator {
    constructor(){}

     DisplayTable(data,Delete_Row,Edit_Row){
         
        if(data === undefined){
            return '<div>Invalid Data Source</div>';
        }
        if(data.length === 0 ){
            return '<div>No Records</div>';
        }       
        var table="";
        var headers = Object.keys(data[1]);
        
        table+= `<table  class='table table-bordered table-striped'>`;
        table += `<thead>`
        table+= `<tr>`
        table+=`<th><input class="checkbox" style="margin-left:32%; margin-top:23%;" type="checkbox" id="select_all" onclick="selectAllCheckboxes(this)"><br>Select All </th>`
      
        for(var head = 0; head < headers.length; head++){
            // table+= `<th onclick= 'sortTable(0)'>${headers[head]}</th>`; 
            table+= "<th>"+headers[head]+ "<br><span style='cursor: pointer;' onclick= 'sortTable(1)'>&#9650 </span>" +"</th>";
        } 

        if( Edit_Row == true && Delete_Row == true){
            table+=`<th>Action</th>`
        }
        table+=`</tr></thead>`;
        table+=`<tbody>`;
        for(let row=0;row<data.length;row++){
            
            table+=`<tr  id=${row} >`;
            table+=`<td id='check'><input class="checkbox" style="margin-left:32%;margin-top:10%;" type="checkbox" name="check"  id="${row}"></td>`
            
            table+= `<td value=${data[row][headers[0]]}  >${data[row][headers[0]]}</td>`
            for(var val=1;val<headers.length;val++){
                //value in input is for showing the already presented values
                table+= `<td>
                <span id='span-${row}-${val}'>${data[row][headers[val]]}</span> 
                <input type='text' value=${data[row][headers[val]]} id='${row}-${val}' style='display:none'> 
                
                </td>`; 
            }  
            

            let prodData=JSON.stringify(data) // to show the products data in table
            if(Edit_Row== true && Delete_Row==true) //To show edit and delete buttons in column
            table+= `<td id='rowid${row}-${val}'><button class="btn btn-success" id='E-${row}-${val}' onclick=EditRow(${prodData},'${row}','${val}')>Edit</button>
            </td>`
            table+= `<td><button class="btn btn-danger" id='${row}' onclick='DeleteRow(${row},${prodData})'>Delete</button>
            </td>`
            table+=`</tr>`;           
        }
        
        table+="</tbody>";
        table+=`<tfoot id='pages'><tr></tr></tfoot>`;
        table+="</table>";
        
        
        
        return table;
        //return table;

    }
        
}

function selectAllCheckboxes(e)
{
    checkboxes = document.getElementsByName('check');
    if (e.checked) {
        for (var i = 0; i < checkboxes.length; i++) { 
          checkboxes[i].checked = true;
        }
      } else {
        for (var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false;
        }
      }
    
}


function sortTable(n) {
    var table, rows, sort,sort1, i, a1, a2, order, count = 0;
    table = document.getElementById("myTable");
    sort = true;
    order = "asc"; 
    while (sort) {
      sort = false;
      rows = table.rows;
      for (i = 1; i < (table.rows - 1); i++) {
        sort1 = false;
        a1 = rows[i].getElementsByTagName("td")[n];
        a2 = rows[i + 1].getElementsByTagName("td")[n];
  
        if (order == "asc") {
          if (a1.innerHTML.toLowerCase() > a2.innerHTML.toLowerCase()) {
            sort1= true;
            break;
          }
        } else if (order == "desc") {
          if (a1.innerHTML.toLowerCase() < a2.innerHTML.toLowerCase()) {
            
            sort1 = true;
            break;
          }
        }
      }
      if (sort1) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        sort = true;
        count ++;      
      } else {
        if (count == 0 && order == "asc") {
          order = "desc";
          sort = true;
        }
      }
    }
  }

//function  to edit the row 
function EditRow(data,row1,row2){
 
edit=`rowid${row1}-${row2}`
for( let i=1;i<row2;i++){
    input=`${row1}-${i}`
    span_id=`span-${row1}-${i}`

    document.getElementById(span_id).style.display='none'
    document.getElementById(input).style.display='block'

    document.getElementById(edit).innerHTML=
    `<button class="btn btn-info" onclick='Edit(${JSON.stringify(data)},${row1},${row2})'>Save</button>
    <button class="btn btn-warning"  style="margin-top:5px" onclick=getRow(${row1},${row2})>Cancel</button>`
    }
}

//function to show row when click on edit and then click on cancel the original row will be displayed as it is
function getRow(row,col)
{
    for(i=1;i<col;i++){
        span_id=`span-${row}-${i}`
        input=`${row}-${i}`
        edit=`rowid${row}-${col}`
        
        document.getElementById(span_id).style.display='block'
        document.getElementById(input).style.display='none'
        document.getElementById(edit).innerHTML=
        `<button class="btn btn-success" id='E-${row}-${col}' onclick=EditRow('${row}','${col}')>Edit</button>`
       
    }

} 

//when click on edit in Action column and then clicked on save, the edit button will appear again,
//if we want to edit that row again
function Edit(data,row,col){
    let headers = Object.keys(data[0]);
    tbl_row_id=`Row-0${row}`
    for(let c=1;c<headers.length;c++){
        span_id=`span-${row}-${c}`
        input=`${row}-${c}`
        let i=`${row}`
        data[i][headers[c]]=document.getElementById(input).value
        document.getElementById(input).style.display='none'
        document.getElementById(span_id).innerHTML=document.getElementById(input).value
        document.getElementById(span_id).style.display='block'
        document.getElementById(edit).innerHTML=
        `<button class="btn btn-success" id='E-${row}-${col}' onclick=EditRow(${JSON.stringify(data)},${row},${col})>Edit</button>`
                 
    }
}


//function to delete the row 
function DeleteRow(del_row,data){
data.splice(del_row)
document.getElementById(del_row).innerHTML=''

}







