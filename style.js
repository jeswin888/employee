

function strdata(){
    car={
        brand:carbrand.value,
        price:carprice.value,
        key:key.value,
       
    }
    if(car.brand==""||car.price==""||car.key==""){
        alert("fill the fields")
    }
    else{
        if(car.key in localStorage){
        alert("car already exist")
    }
    else{
        localStorage.setItem(car.key,JSON.stringify(car))
        alert("car added successfully")
    }
}
}
function search(){
    let save=srch.value
    let car=JSON.parse(localStorage.getItem(save))
    result.innerHTML=`${car.brand}`
}

function del(){
 
   localStorage.removeItem("15")
}
function remove(){
    localStorage.clear()
}