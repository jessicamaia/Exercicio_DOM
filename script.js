// Resolução da 1° letra A:

    let lista_item = document.querySelector("ul > li");
    lista_item.style.color="blue";

// Resolução da 1° letra B:

    const item3 = document.querySelectorAll ("li")[2];
    let el = item3;

    while(el.previousElementSibling != null){
        el = el.previousElementSibling;
        el.style.fontWeight = "bold";
    }

// Resolução da 1° letra C:

    let lista_borda = document.querySelector("ul li:nth-child(5)").parentNode;
    lista_borda.style.border = "2px solid black";

// Resolução da 1° letra D:

    let divs = lista_borda.parentNode.querySelectorAll("div")
    for (let i=0; i< divs.length; i++){
        divs[i].style.color="red";
    }
