//----------Bai tap 1-----------
let danhSachSV = ["dat", "tung", "trang"]
  
let todoInp = document.getElementById('todoInput')
let todoPosition = document.getElementById('todoPosition')
function handleAddFirst () { 
    danhSachSV.unshift(todoInp.value)  
    todoInp.value = "";
    // Focus vào todo input
    todoInp.focus();
    renderList(danhSachSV)
}

function handleAddLast () { 
    danhSachSV.push(todoInp.value)  
    todoInp.value = "";
    // Focus vào todo input
    todoInp.focus();
    renderList(danhSachSV)
}


function handleAddAnyIndex () { 
    danhSachSV.splice(todoPosition.value, 0, todoInp.value)   
    todoInp.value = "";
    todoPosition.value = "";
    // Focus vào todo input
    todoInp.focus();
    renderList(danhSachSV)
}

let list = document.getElementById("list");
function renderList(arr) {  
    list.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        //moi lần lặp list sẽ tăng lên một dòng 
        list.innerHTML +=
            `<li>${arr[i]}</li> `;
    } 
} 

renderList(danhSachSV)

//-----------Bai tap 2---------
let numbers = [58,31,98,82,57,22,43,73,28,96,91,68,67,12,39,7,87,21,61,67]

function calculateSumArray() {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        //moi lần lặp list sẽ tăng lên một dòng 
        total += numbers[i];
    } 

    document.getElementById("sum").innerHTML = total;
}

function ascendingArray() {
    let temp  = [0];
    for (let i = 0; i < numbers.length -1 ; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[j]
                numbers[j] = numbers[i]
                numbers[i] = temp;
            }
        }
         
    } 

    renderListNumber(numbers, document.getElementById("ascending")) 
}

function findOddAndEvenNumber() {
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i < numbers.length -1 ; i++) {
        if(numbers[i] % 2 == 0) {
            evenArr.push(numbers[i]);
        } 
        else {
            oddArr.push(numbers[i])
        }
    } 

    renderListNumber(evenArr, document.getElementById("even")) 
    renderListNumber(oddArr, document.getElementById("odd")) 
}

let listNumber = document.getElementById("listNumber");
function renderListNumber(arr, element) {  
    for (let i = 0; i < arr.length; i++) {
        //moi lần lặp list sẽ tăng lên một dòng 
        element.innerHTML +=
            `${arr[i]}, `;
    } 
} 

renderListNumber(numbers, listNumber)