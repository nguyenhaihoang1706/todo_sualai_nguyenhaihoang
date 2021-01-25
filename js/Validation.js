
function Validation(){
    
    this.kiemTraRong = function(input,spanId){
        if(input === ""){
            getEle(spanId).innerHTML = alert("Vui lòng nhập đầy đủ thông tin");
            return false;
        }
        getEle(spanId).innerHTML = "";
        alert("Add thành công")
        return true;
    };

    this.trungTask = function(input, spanId,arr){
        var status = true;
       for(var i=0; i < arr.length; i++){
         if(input === arr[i].taskName){
           status =  false;
           break;
         }
       }
       if(status){
        getEle(spanId).innerHTML == "";
        return true;
       }
       getEle(spanId).innerHTML = alert("Đã trùng tên...Xin nhập lại tên khác");
      return false;
  };  
}