

var starter = document.getElementById('starter');
starter.addEventListener("click", done);

var button = document.getElementById('bt1'); //gets button
button.addEventListener("click", append); //append to list when you click

var list = document.getElementById('list'); //gets list

function append(){
    var item = document.getElementById('input').value; //gets item entered
    if((item == "") || (item == null)){ //no item entered
            alert("Please Enter An Item Name");
            return;
    }else{
        var newitem = document.createElement('li'); //add to list
        var itemtext = document.createTextNode(item);
        var check = document.createElement('input');
        check.type = 'checkbox';
        newitem.appendChild(check);
        newitem.appendChild(itemtext);
        newitem.addEventListener("click", done);
        list.prepend(newitem);
    }//end of else
    document.getElementById('input').value = ""; //empty input box
}//end of append

function done(){  
   this.className = 'done';

    $('ul#list').find('li.done').appendTo('ul#list');

}
var listItems = document.querySelectorAll('li');                   // All <li> elements

