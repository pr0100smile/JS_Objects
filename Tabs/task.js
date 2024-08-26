const tabItems = Array.from(document.querySelectorAll('.tab'));
const contentItems = Array.from(document.querySelectorAll('.tab__content'));

const clearActiveClass = (element, className = 'tab__content_active') => {
    element.forEach(item => item.classList.remove(className));
}

const setActiveClass = (element, index, className = 'tab__content_active') => {
    element[index].classList.add(className);
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('tab_active')) return;
        console.log(item);

        clearActiveClass(tabItems, 'tab_active');
        clearActiveClass(contentItems, 'tab__content_active');

        item.classList.add('tab_active');
        setActiveClass(contentItems, index);
    });
}

tabItems.forEach(checkoutTabs);