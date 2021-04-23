class tableLogic{
    productList=[];   
    constructor(){
        this.obj = new UIGenerator()
        this.PageSize = 5
        this.Delete = true
        this.Edit = true
        this.CheckBox= true
        this.productList = [
                            {Sr_No :1,Product_Id:'Prd-1', Product_Name:'Laptop', Category:'Electronics', Manufacturer:"IBM", Description:"Description1",Base_Price:40000},
                            {Sr_No :2,Product_Id:'Prd-2', Product_Name:'Mouse', Category:'Electrical', Manufacturer:"TATA", Description:"Description2",Base_Price:2500},
                            {Sr_No :3,Product_Id:'Prd-3', Product_Name:'Cadbury', Category:'Food', Manufacturer:"PARLE", Description:"Description3",Base_Price:1000},
                            {Sr_No :4,Product_Id:'Prd-4', Product_Name:'Mobile', Category:'Electronics', Manufacturer:"TATA", Description:"Description4",Base_Price:20000},
                            {Sr_No :5,Product_Id:'Prd-5', Product_Name:'Keyboard', Category:'Electrical', Manufacturer:"IBM", Description:"Description5",Base_Price:3000},
                            {Sr_No :6,Product_Id:'Prd-6', Product_Name:'Chair', Category:'Furniture', Manufacturer:"BAJAJ", Description:"Description6",Base_Price:12000},
                            {Sr_No :7,Product_Id:'Prd-7', Product_Name:'Laptop', Category:'Electronics', Manufacturer:"TATA", Description:"Description7",Base_Price:60000},
                            
                            {Sr_No :8,Product_Id:'Prd-8', Product_Name:'Charger', Category:'Electronics', Manufacturer:"IBM", Description:"Description8",Base_Price:500},
                            {Sr_No :9,Product_Id:'Prd-9', Product_Name:'T.V', Category:'Electrical', Manufacturer:"RELIANCE", Description:"Description9",Base_Price:25000},
                            {Sr_No :10,Product_Id:'Prd-10', Product_Name:'Chocolate', Category:'Food', Manufacturer:"NESTLE", Description:"Description10",Base_Price:2000},
                            {Sr_No :11,Product_Id:'Prd-11', Product_Name:'Straightner', Category:'Electronics', Manufacturer:"BAJAJ", Description:"Description11",Base_Price:999},
                            {Sr_No :12,Product_Id:'Prd-12', Product_Name:'Keyboard', Category:'Electrical', Manufacturer:"IBM", Description:"Description12",Base_Price:3200},
                            {Sr_No :13,Product_Id:'Prd-13', Product_Name:'Table', Category:'Furniture', Manufacturer:"BAJAJ", Description:"Description13",Base_Price:13000},
                            ];
                
                            this.state= {
                                'data': this.productList,
                                'state': 1,
                                'rows': this.PageSize  
        
                            }
                            
    }
    
    
    //To show the pagination number
    pagination=(prod,page,rows)=>{
        this.trimStart = (page-1) * rows
        this.trimEnd = this.trimStart + rows
         this.trimdata = prod.slice(this.trimStart,this.trimEnd)
        this.pageNo = Math.round(prod.length / rows);
        return{
            'prod':this.trimdata,
            'pageNo':this.pageNo
        }
    }

    
//To display pagination buttons
    PaginationButtons =(pages)=>{
        
        var pagination = document.getElementById('pagination')
        for( var pg=1; pg<=pages ;pg++){
            pagination.innerHTML+=`<button value=${pg} class='page btn-sm btn btn-warning' style="border:2px solid grey;" name='page'>${pg}</button>`
        }

       var page_btn= document.getElementsByName('page')
      
        for(var i of page_btn){
            i.addEventListener('click',this.pageButton,false)

        }
        
    }
    //when clicked on  pageButton, will go to the respective page
    pageButton=(e)=>{
                document.getElementById('myTable').innerHTML=''
                document.getElementById('pagination').innerHTML=''
                
        this.state['state']=e.target.value
        this.getTableData()
        
    }

    //get table with headers,columns and buttons
    getTableData=()=>{
        this.productList=this.pagination(this.state['data'],this.state['state'],this.state['rows'])
  
        document.getElementById('myTable').innerHTML=this.obj.DisplayTable(this.productList['prod'],this.Delete,this.Edit)       
        this.PaginationButtons(this.productList['pageNo'])
        
    }    
}

//to show table with the logic of pagination and table
function showTable(){
    prd = new tableLogic
    prd.getTableData()
}

