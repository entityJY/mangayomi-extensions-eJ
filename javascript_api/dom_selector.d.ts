/**
 * Document class
 */
export class Document {
    constructor(html);
    getElement(type);
    body: Element;
    documentElement: Element;
    head: Element;
    parent: Element;
    getString(type): String;
    text: String;
    outerHtml: String;
    /**
     * Grabs the first element that matches the CSS selector
     * @param selector CSS selector
     */
    selectFirst(selector): Element;
    /**
     * Grabs all the elements that match the CSS selector
     * @param selector CSS selector
     */
    select(selector): Element[];
    xpathFirst(xpath): String;
    xpath(xpath): String;
    getElementsListBy(type, name): Element[];
    children: Element[]
    getElementsByTagName(name): Element[];
    getElementsByClassName(name): Element[];
    getElementById(id): Element;
    attr(attr): String;
    hasAttr(attr): String;
}

/**
 * Element class
 */
export class Element {
    constructor(key);
    getString(type): String;
    text: String;
    outerHtml: String;
    innerHtml: String;
    className: String;
    localName: String;
    namespaceUri: String;
    getSrc: String;
    getImg: String;
    getHref: String;
    getDataSrc: String;
    getElementSibling(type): Element;
    previousElementSibling: Element;
    nextElementSibling: Element;
    getElementsListBy(type, name): Element[];
    children: Element[];
    getElementsByTagName(name): Element[];
    getElementsByClassName(name): Element[];
    xpath(xpath): String;
    attr(attr): String;
    xpathFirst(xpath): String;
    /**
     * Grabs the first element that matches the CSS selector
     * @param selector CSS selector
     */
    selectFirst(selector): Element;
    /**
     * Grabs all the elements that match the CSS selector
     * @param selector CSS selector
     */
    select(selector): Element[];
    hasAttr(attr): String
}