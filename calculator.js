function addVal(val){

    document.getElementById('display').value = document.getElementById('display').value + val;
}

function result () {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

function clr(){
    document.getElementById('display').value = "";
}

function del(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
}