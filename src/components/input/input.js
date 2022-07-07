import createElement from "../element/element";

function createInput(type, placeholder) {
    const input = createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add('form-control');
    
    return input;
}

export default createInput;