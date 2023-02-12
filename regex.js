
import template from './template';

let pattern;
let input;
let result;

function createApp(element) {
    element.innerHTML = template;
    element.querySelector('input[name="pattern"]').addEventListener('input', patternInputhandler);
    element.querySelector('textarea[name="input"]').addEventListener('input', stringInputhandler);
    result = element.querySelector('#result');
}

function patternInputhandler(e)
{
    e.preventDefault();
    pattern = e.target.value
    drawResult();
}

function stringInputhandler(e)
{
    e.preventDefault();
    input = e.target.value
    drawResult();
}

function findMatches()
{   
    try {

        if (!input || !pattern) {
            throw new Error('Invalid inputs'); 
        }

        return input.match(new RegExp(pattern, 'gm')) || [];

    } catch (error) {
        console.error(error);
        return [];
    }
}

function drawResult()
{
    let matches = findMatches();

    console.log(matches);

    result.innerHTML = JSON.stringify(matches);
}

export { createApp }