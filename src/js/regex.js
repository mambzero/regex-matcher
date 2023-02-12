
import template from './template';

let pattern, input, resultArea;

function createApp(element) {
    element.innerHTML = template;
    element.querySelector('input[name="pattern"]').addEventListener('input', patternInputHandler);
    element.querySelector('textarea[name="input"]').addEventListener('input', textInputHandler);
    resultArea = element.querySelector('#result');
}

function patternInputHandler(e)
{
    e.preventDefault();
    pattern = e.target.value;
    drawResult();
}

function textInputHandler(e)
{
    e.preventDefault();
    input = e.target.value;
    drawResult();
}

function inputsAreValid() {
    return !!pattern && !!input;
}

function findMatches()
{   
    try {

        if (inputsAreValid() === false) {
            return '...';
        }

        let matches = input.match(new RegExp(pattern), 'gm');

        if (!matches) {
            throw new Error('No matches found!');
        }

        return matches;

    } catch (error) {
        return `<p class="text-error">${error.message}</p>`;
    }
}

function drawResult()
{
    let result = findMatches();

    if (Array.isArray(result)) {
        let ul = '<ul>';
        ul += '<li>[</li>';
        for (const [key, value] of Object.entries(result)) {
            ul += `<li>${key}: ${JSON.stringify(value)}</li>`;
        }
        ul += '<li>]</li>';
        ul += '</ul>';
        result = ul;
    }

    resultArea.innerHTML = result;
}

export { createApp }