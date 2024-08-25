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
        if (item.classList.contains('tab__content_active')) return;
        console.log(item);

        clearActiveClass(tabItems);
        clearActiveClass(contentItems);

        setActiveClass(tabItems, index);
        setActiveClass(contentItems, index);
    });
}

tabItems.forEach(checkoutTabs);