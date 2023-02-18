import template from './template';
import { Dropdown } from 'bootstrap';
import flags from '../data/flags.json';

let pattern, input, resultArea;

const selectedFlagClasses = ['bg-primary', 'text-white'];

flags.selected = ['g', 'm'];

function createApp(element) {
    element.innerHTML = template;
    element.querySelector('input[name="pattern"]').addEventListener('input', patternInputHandler);
    element.querySelector('textarea[name="input"]').addEventListener('input', textInputHandler);
    resultArea = element.querySelector('#result');
    initFlagsDropdown();
}

function initFlagsDropdown()
{
    const dropdown = document.querySelector('#flags');
    const list = dropdown.querySelector('.dropdown-menu');

    setFlagsString();

    for (let { name, desc } of flags) {
        list.appendChild(
            createDropdownItem({ name, desc })
        );
    }

    list.addEventListener('click', flagsClickHandler);

    new Dropdown(dropdown);
}

function flagsClickHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.nodeName === 'A') {
        let target = e.target;
        let flag = target.getAttribute('data-flag');
        if (flags.selected.includes(flag)) {
            flags.selected = flags.selected.filter((selected) => selected !== flag);
            target.classList.remove(...selectedFlagClasses);
        } else {
            flags.selected.push(flag); 
            target.classList.add(...selectedFlagClasses);
        }
        setFlagsString();
        drawResult();
    }
}

function createDropdownItem(flag)
{
    let li = document.createElement('li');
    let a = document.createElement('a');
    let linkClasses = ['dropdown-item'];
    if (flags.selected.includes(flag.name)) {
        linkClasses.push(...selectedFlagClasses);
    }
    a.classList.add(...linkClasses);
    a.setAttribute('data-flag', flag.name);
    a.innerText = `${flag.name} - ${flag.desc}`;
    a.href = '#';
    li.appendChild(a);
    return li;
}

function setFlagsString() {
    document.querySelector('.flags-string').innerHTML = flags.selected.join('');
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

        let matches = input.match(new RegExp(pattern, flags.selected.join('') || undefined));

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