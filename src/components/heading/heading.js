import createElement from "../element/element";

function createHeading(text, level) {
    const heading = createElement(level);
    heading.textContent = text;

    return heading;
}

export default createHeading;