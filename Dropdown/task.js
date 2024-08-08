let mainDrop = document.querySelector('div.dropdown__value');
let mainList = Array.from(document.querySelectorAll('a.dropdown__link'));

function dropdownMenu() {
    let dropList = document.querySelector('ul.dropdown__list')
    dropList.classList.contains('dropdown__list_active') ? dropList.classList.remove('dropdown__list_active') : dropList.classList.add('dropdown__list_active');
};

mainDrop.addEventListener('click', dropdownMenu);

mainList.forEach(function (item) {
    item.onclick = function () {
        document.querySelector('div.dropdown__value').textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', dropdownMenu);
})