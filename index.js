function myfun(val){
    document.getElementById("res").value+=val;
}
function clr(){
    document.getElementById("res").value=""
}
function del(){
    let del = document.getElementById("res");
    let value = del.value;
    del.value=value.slice(0,-1)
}
function equal(){
    let result=document.getElementById("res");
    let resultval=result.value;
    try{
    result.value= eval(resultval);
    }catch(e){
        result.value="error";
    }
}