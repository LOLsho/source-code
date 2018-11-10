export function createElem(
    selector: string = 'div',
    className: string = '',
    content: string | HTMLElement | HTMLElement[] = ''
) {
    let elem: HTMLElement = document.createElement(selector);
    elem.className = className;

    if (typeof content === 'string') {
        elem.innerHTML = content;
    } else if (Array.isArray(content)) {
        content.forEach((item: HTMLElement) => {
            elem.appendChild(item);
        });
    } else {
        elem.appendChild(content);
    }

    return elem;
}

export function find(selector: string) {
    let foundedElem: HTMLElement = document.querySelector(selector);
    return foundedElem;
}