// window.onload executes after EVERYTHING is loaded, including images
// The interactive blocks can start rendering before images, so
// find a different way to detect if document has been loaded
window.addEventListener('load', renderAll);

function renderAll() {
    
    let interactiveBlocks = document.body.getElementsByTagName('interactive');
    for (let i = 0; i < interactiveBlocks.length; i++) {
        let interactiveBlock = interactiveBlocks[i];
        renderInteractiveBlock(interactiveBlock);
    }

}

function renderInteractiveBlock(interactiveBlock) {

    let blockCode = interactiveBlock.innerHTML;

    try {
        let render = constructRenderingFunction(blockCode);
        let generatedElement = render();

        // If the element that we want to render is an array, render all its
        // elements in line instead of one after another
        if (Array.isArray(generatedElement)) {

            // Use Bootstrap's grid system to create a row of elements
            let row = document.createElement("div");
            row.className = "row";

            for (let i = 0; i < generatedElement.length; i++) {
                let column = document.createElement("div");
                column.className = "col-sm";

                try {
                    let renderedElement = generatedElement[i].getElement(interactiveBlock.parentElement);
                    column.appendChild(renderedElement);
                } catch (error) {
                    let exceptionElement = exception().withMessage(error);
                    column.appendChild(exceptionElement.getElement());
                }
                row.appendChild(column);
            }

            interactiveBlock.parentElement.appendChild(row);

        } else {
            let renderedElement = generatedElement.getElement(interactiveBlock.parentElement);
            interactiveBlock.parentElement.appendChild(renderedElement);
        }
        
    } catch (error) {
        let exceptionElement = exception().withMessage(error);
        interactiveBlock.parentElement.appendChild(exceptionElement.getElement());
    }

}

function constructRenderingFunction(code) {

    let renderingFunctionCode = 'return (' + code + ')';
    return new Function(renderingFunctionCode);

}

let idCounter = 1;

class InteractiveElement {
    constructor(element) {
        this.element = element;
        this.id = InteractiveElement.generateUniqueId();
    }
    getElement(parent) {
        // This function is called with a parent element passed in as an
        // argument. We could update our element before returning it here.
        return this.element;
    }
    static generateUniqueId() {
        idCounter += 1;
        return idCounter - 1;
    }
    uniqueId() {
        return this.id;
    }
}

class Exception extends InteractiveElement {
    constructor() {
        super(document.createElement("div"));
        this.element.className = "exception";
    }
    withMessage(error) {
        console.log(error);
        this.element.innerText = error;
        return this;
    }
}

function exception() {
    return new Exception();
}