function additem(){
    if(todo.value){
        var res = todo.value;
        item.innerHTML = item.innerHTML + `<li>${res}</li>`;

        //alert(res)
    }
    else{
        alert("please enter a valid value")
    }
    todo.value=""
}

