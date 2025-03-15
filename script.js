const searchInput = document.getElementById('searchInput');
const list = document.querySelector('#list');

// Метод indexOf - ищет подстроку в строке
// Возвращает позицию первого совпадения, а если оно не найдено то вернет -1.
// синтаксис: строка.indexOf(что_ищем, [откуда начать поиск]);


// Функция проверяет содержит ли строка full в себе подстроку chunk
// Если строка содержит подстроку то функция вернёт true иначе fasle
function isMatching(full, chunk) {
    let pos = full.toLowerCase().indexOf(chunk.toLowerCase());
    return pos != -1;
}

// let pos = str.toLowerCase().indexOf(letter.toLowerCase());

// при вводе данных в поле ввода
searchInput.addEventListener('keyup', () => {
    // получить коллекцию списка элементов
    let items = document.querySelectorAll('.item');
    // получить значение из поля ввода
    let value = searchInput.value;
    // перебрать в цикле все элементы списка
    for (let item of items) {
        // если функция isMatching найдет введённое в строку поиска содержимое внутри элемента списка
        // и проверяем, что строка не пустая (если список изначально скрыт)
        if (isMatching(item.textContent, value) && value != '') {
            // отображаем этот элемент на экране
            item.style.display = 'flex';
        } else {
            // иначе скрываем этот элемент
            item.style.display = 'none'
        }
    }
})

