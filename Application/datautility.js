
// GET api url
const get_url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
  
// Defining async function
async function getapi() {   
    // Storing response
    const response = await fetch(get_url); 
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
        
    //     console.log('storing data');
        

    // }
    show(data);
    cssApply(data);
  
}
getapi();

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th class="header">Product Id</th>
          <th class="header">Product Name</th>
          <th class="header">Category Name</th>
          <th class="header">Manufacturer</th>
          <th class="header">Description</th>
          <th class="header">BasePrice</th>
          <th class="header">Action</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr id="MyElement"> 
    <td>${r.ProductId}</td>
    <td>${r.ProductName}</td>
    <td>${r.CategoryName}</td> 
    <td>${r.Manufacturer}</td>     
    <td>${r.Description}</td>     
    <td>${r.BasePrice}</td>     
    <td>'<input type="button" class="btn btn-danger" onclick="delete_data( '+r.ProductId+' )" value="DELETE">'</td>
</tr>`;

    }
    document.getElementById("products").innerHTML = tab;
}

function cssApply(data){
    for(let r of data){
        if(r.CategoryName == 'Electronics'){
            console.log(r.CategoryName);
            document.getElementById("MyElement").classList.add('table-danger');
        }else if(r.CategoryName == 'Electrical'){
            console.log(r.CategoryName);
            document.getElementById("MyElement").classList.add('table-primary');
        }else if(r.CategoryName == 'Food'){
            console.log(r.CategoryName);
            document.getElementById("MyElement").classList.add('table-warning');
        }
    }

}
    


function delete_data(ProductId) {
    let prd = {
        ProductId: document.getElementById('ProductId').value
    };
    console.log('Deleting Item...');
    // fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products/{{prd.ProductId}}', {
    // fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}`, {
    // fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products/402', {
        fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products/:ProductRowId', {
        method: 'DELETE',
        body: null,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Origin':'http://127.0.0.1:5501/' 
        },

    })
    console.log(prd);
    console.log('Item Deleted..Click on GET to check');

}
