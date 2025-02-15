const get_url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";

async function getapi() {
    const response = await fetch(get_url);
    var data = await response.json();
    console.log(data);
    show(data);
    cssApply(data);

}
getapi();

function show(data) {
    let tab =
        `<tr>
        <th class="header">Product Row Id</th>
          <th class="header">Product Id</th
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
    <td>${r.ProductRowId}</td>
    <td>${r.ProductId}</td>
    <td>${r.ProductName}</td>
    <td class="td">${r.CategoryName}</td> 
    <td>${r.Manufacturer}</td>     
    <td>${r.Description}</td>     
    <td>${r.BasePrice}</td>     
    <td><input type="button" class="btn btn-danger" onclick="delete_data(${r.ProductRowId})" value="DELETE"><br>
    <input type="button" class="btn-info" onclick="put_data(${r.ProductRowId})" value="PUT"></td>
</tr>`;

    }
    document.getElementById("products").innerHTML = tab;
}

function cssApply(data) {
    for (let r of data) {
        if (r.CategoryName === 'Electronics') {
            console.log(r.CategoryName);
            document.getElementsByClassName("td").classList.add('table-danger');
        } else if (r.CategoryName === 'Electrical') {
            console.log(r.CategoryName);
            document.getElementsByClassName("td").classList.add('table-primary');
        } else if (r.CategoryName === 'Food') {
            console.log(r.CategoryName);
            document.getElementsByClassName("td").classList.add('table-warning');
        }
    }

}



function delete_data(ProductRowId) {
    let prd = {
        ProductId: document.getElementById('ProductId').value
    };
    console.log('Deleting Item...');
        fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}`, {
        method: 'DELETE'


    })
    console.log(prd);
    console.log('Item Deleted..Click on GET to check');

}

function put_data(ProductRowId) {
 
        fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}`, {
        method: 'PUT'


    })

}