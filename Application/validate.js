class Products {
    constructor(){
        this.ProductId=''   
        this.ProductName=''   
        this.Category=''
        this.Manufacturer=''   
        this.Description='' 
        this.BasePrice=''
    }
}

const handler = {
    set(target, prop,value) {
        pid = ProductId.value
        if(pid.substring(0, 4) != 'Prd-')
        {
            alert("Product id must start with Prd-")
            throw new Error("Product id must start with Prd-")

        }

        if(prop=='BasePrice'){
            if(isNaN(value)){
                alert("Product Price must be Numeric")
                throw new Error("Product Price must be Numeric")
            }
            else{
                target[prop] =value;
                return true;
            }
        }
 
    },
};

const user = new Products();
const proxy_data = new Proxy(user,handler);

function GetUser(){
    proxy_data.ProductId=document.getElementById('ProductId').value   
    proxy_data.ProductName=document.getElementById('ProductName').value   
    proxy_data.Category=document.getElementById('Category').value   
    proxy_data.Manufacturer=document.getElementById('Manufacturer').value   
    proxy_data.Description=document.getElementById('Description').value   
    proxy_data.BasePrice=document.getElementById('BasePrice').value
}

try{
    GetUser();
}catch(e){
    // console.log(e.message);
}