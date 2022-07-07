function createHeading(text, level) {
    const heading = document.createElement(level);
    heading.textContent = text;

    return heading;
}

export default createHeading;