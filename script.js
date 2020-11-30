let items = [];

function populateList(){
    let item = {
        item: "Spring en runda",
        isChecked: false
    };
    let item1 = {
        item: "Städa",
        isChecked: false
    };
    let item2 = {
        item: "Byt däck på bilen",
        isChecked: false
    };

    items.push(item);
    items.push(item1);
    items.push(item2);
}

populateList();
displayList();

function addItemToList(event){

    event.preventDefault();
    
    let userInput = $("#input-item").val();
    
    if(checkItemNotEmpty()){
        
        let itemToAdd = {
            item: userInput,
            isChecked: false
        };
        
        items.push(itemToAdd);
    }
    else {
        alert("Input kan inte vara tom, lägg till en sak att göra!");
    }
    
    $("#input-item").val("");
    displayList();
}

function checkItemNotEmpty(){
    return $("#input-item").val() != "" ? true : false;
}

function displayList(){

    let list = $("#ul-list");
    list.empty();

    for (let index = 0; index < items.length; index++) {
        
        list.append(`<li class = "list-element"> 
        <span class = "fas fa-check"></span> 
        <span class = "item-text">${items[index].item} </span>
        <span class = "fas fa-times"></span>  
        </li>`);
    }

    toggleCheckItemInList();
    deleteItemInList();
    currentCheckStatus();
}

function toggleCheckItemInList(){

    let listElements = $(".list-element");

    for (let index = 0; index < listElements.length; index++) {

        $(listElements[index]).click(function(){

            $(this).find(".item-text").toggleClass("checker-text");
            $(this).find(".fa-check").toggleClass("checker");
            $(this).toggleClass("checker-background");

            if(!items[index].isChecked){
                items[index].isChecked = true;
            }
            else {
                items[index].isChecked = false;
            }
        });
    }
}

function currentCheckStatus(){

    let listElements = $(".list-element");

    for (let index = 0; index < listElements.length; index++) {

        if(items[index].isChecked){

            $(listElements[index]).find(".item-text").toggleClass("checker-text");
            $(listElements[index]).find(".fa-check").toggleClass("checker");
            $(listElements[index]).toggleClass("checker-background");
        }
    }
}

function deleteItemInList(){
    
    let allDeleteSymbols = $(".fa-times");
    
    for (let index = 0; index < allDeleteSymbols.length; index++) {
        $(allDeleteSymbols[index]).click(function(){
            $(this).parent().remove();
            items.splice(index,1);
            displayList();
        });
    }
}


