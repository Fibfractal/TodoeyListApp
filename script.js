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

    $(".fa-check").css("color", "rgba(31, 175, 175, 0.0)");

    

    toggleCheckItemInList();
    deleteItemInList();
    currentCheckStatus();
}

function toggleCheckItemInList(){

    let listElements = $(".list-element");

    for (let index = 0; index < listElements.length; index++) {

        $(listElements[index]).click(function(){
            
            if(!items[index].isChecked){
                items[index].isChecked = true;
                $(this).find(".item-text").css('textDecoration','line-through');
                $(this).find(".fa-check").css("color", "white");
                $(this).css("background-color", "rgba(0, 128, 128, 0.3)");
            }
            else {
                items[index].isChecked = false;
                $(this).find(".item-text").css('textDecoration','none');
                $(this).find(".fa-check").css("color", "rgba(31, 175, 175, 0.0)");
                $(this).css("background-color", "rgba(31, 175, 175, 0.5)");
            }
        });
    }
}

function currentCheckStatus(){

    let listElements = $(".list-element");

    for (let index = 0; index < listElements.length; index++) {

        if(items[index].isChecked){
            $(listElements[index]).find(".item-text").css('textDecoration','line-through');
            $(listElements[index]).find(".fa-check").css("color", "white");
            $(listElements[index]).css("background-color", "rgba(0, 128, 128, 0.3)");
        }
        else {
            $(listElements[index]).find(".item-text").css('textDecoration','none');
            $(listElements[index]).find(".fa-check").css("color", "rgba(31, 175, 175, 0.0)");
            $(listElements[index]).css("background-color", "rgba(31, 175, 175, 0.5)");
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
