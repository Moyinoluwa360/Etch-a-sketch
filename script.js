
function getGrid(dimension){
    for (let rowCounter = 0;  rowCounter < dimension; rowCounter++) { 
        const row = document.createElement('div');
        row.classList.add('row'); 
        const juniorContainer = document.querySelector("#juniorContainer")

        juniorContainer.appendChild(row)
        for (let rowItemCounter = 0; rowItemCounter < dimension; rowItemCounter++){
            const rowItem = document.createElement('div')
            rowItem.classList.add('rowItem')
            row.appendChild(rowItem)
        }
      }
}
function draw(){
    let isClicked = false
    let rowItemList = document.querySelectorAll(".rowItem");
    for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
        rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
            isClicked = true
            rowItemList[rowItemListCounter].style.backgroundColor = "black" ;
        })
        rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
            if (isClicked){
                rowItemList[rowItemListCounter].style.backgroundColor = "black" ;
            }
        })
        rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
            isClicked = false
        })
}
}
// random color function
function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    return randomcolor
  }

getGrid(16)
draw()
// event listener for Grid Number
const gridlayout = document.querySelector("#dimensions")
gridlayout.addEventListener("click",() => {
    let gridNum = prompt("Enter the number of dimension you want your grid. Note not to exceed 100");
    if (isNaN(gridNum)){
        alert("Make sure input is a number")
    }else{
        gridNum = Number(gridNum)
        if (gridNum > 100){
            gridNum = 100 ;
        }
        const rowDelete = document.querySelectorAll(".row")
        const juniorContainer = document.querySelector("#juniorContainer")
        let lenRowDelete = rowDelete.length
        for (let Counter = 0;  Counter < lenRowDelete; Counter++) { 
            juniorContainer.removeChild(rowDelete[Counter])
    }
        const rowItemArr = document.querySelectorAll(".rowItem")
        let lenRowItemArr = rowItemArr.length
        for (let counter = 0;  counter < lenRowItemArr; counter++) { 
            juniorContainer.appendChild(rowItemArr[counter])
    }
        getGrid(gridNum)
        draw()
    }
}
)
// event listener for Togle Border
const borderToogle = document.querySelector("#borderToogle");
let isBorder = true;
borderToogle.addEventListener("click",() => {
    if (isBorder){
        isBorder = false;
        rowItemBorder = document.querySelectorAll(".rowItem");
        for(let counter = 0; counter < rowItemBorder.length; counter++){
            rowItemBorder[counter].style.border = 0 ;
    }
    }else{
        isBorder = true;
        rowItemBorder = document.querySelectorAll(".rowItem");
        for(let counter = 0; counter < rowItemBorder.length; counter++){
            rowItemBorder[counter].style.borderBottom = "0.1px solid black" ;
            rowItemBorder[counter].style.borderRight = "0.1px solid black" ;
    }
    }
})
// event listener for eraser
const eraser = document.querySelector("#eraser");
let isNotErased = true
eraser.addEventListener("click",() => {
    let isClicked = false
    let rowItemList = document.querySelectorAll(".rowItem");
    if (isNotErased){
        isNotErased = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = "white" ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = "white" ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }else{
        isNotErased = true
        draw()
    }
})
// event listener for board clearing
const boardClear = document.querySelector("#clear")
boardClear.addEventListener("click", () => {
    let rowItemList = document.querySelectorAll(".rowItem");
    for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
        rowItemList[rowItemListCounter].style.backgroundColor = "white";

    }
    draw()
})

// event listener for rainbow mode

const rainbowMode = document.querySelector("#rainbow")
let isNotRainbow = true
rainbowMode.addEventListener("click", () => {
    let isClicked = false
    let rowItemList = document.querySelectorAll(".rowItem");
    if (isNotRainbow){
        isNotRainbow = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = RGBcolor() ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = RGBcolor() ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }else{
        isNotRainbow = true
        draw()
    }
})
// eventlistener for default brush
const defaultBrush = document.querySelector("#defaultBrush");
defaultBrush.addEventListener("click", () => {
    draw()
})
// eventlistener for shading
let clicked = 1
const shader = document.querySelector("#shadingEffect")
shader.addEventListener("click",() => {
    let rowItemList = document.querySelectorAll(".rowItem");
    if (clicked == 1){
        clicked = 2
        let isClicked = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = "rgb(209, 207, 205)" ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = "rgb(209, 207, 205)" ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }else if(clicked == 2){
        clicked = 3
        let isClicked = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = "rgb(143, 140, 140)" ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = "rgb(143, 140, 140)" ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }else if(clicked == 3){
        clicked = 4
        let isClicked = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = "rgb(102, 101, 100)" ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = "rgb(102, 101, 100)" ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }else if(clicked == 4){
        clicked = 5
        let isClicked = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = "rgb(48, 47, 47)" ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = "rgb(48, 47, 47)" ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }else if(clicked == 5){
        clicked = 1
        let isClicked = false
        for (let rowItemListCounter = 0; rowItemListCounter < rowItemList.length; rowItemListCounter++){
            rowItemList[rowItemListCounter].addEventListener("mousedown",() => {
                isClicked = true
                rowItemList[rowItemListCounter].style.backgroundColor = "rgb(0, 0, 0)" ;
            })
            rowItemList[rowItemListCounter].addEventListener("mouseover",() => {
                if (isClicked){
                    rowItemList[rowItemListCounter].style.backgroundColor = "rgb(0, 0, 0)" ;
                }
            })
            rowItemList[rowItemListCounter].addEventListener("mouseup",() => {
                isClicked = false
            })
    }
    }
 
})