let inputNumber = document.querySelector('.todoInput_Number')
let inputText = document.querySelector('.todoInput_Text');
let list_item = document.querySelector('.listItem')


let todoMap = new Map();

function buttonClick() {

    if (isNaN(inputNumber.value)) {
        alert('Введите число!')
        return
    }

    if (!inputNumber.value) {
        alert('Введите данные!')
        return
    }

    todoMap.set(inputNumber.value, inputText.value)
    let first = list_item.firstElementChild;
    while (first) {
        first.remove()
        first = list_item.firstElementChild
    }

    new Map([...todoMap.entries()].sort((e1, e2) => e2[0] - e1[0]))
        .forEach((value, key) => {

                let list_items = document.createElement('div');
                list_items.classList.add('div_item');

                list_items.innerHTML = key + ')' + value
                list_item.prepend(list_items);
            }
        )
    inputNumber.value = ""
    inputText.value = ""
}

