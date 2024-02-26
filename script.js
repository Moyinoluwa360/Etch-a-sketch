
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
getGrid(50)
let isClicked = false
function draw(){
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
draw()
