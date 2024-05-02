const assert = require('assert');
const path = require('path');
const fs = require('fs');

const readPeople = require('../read-people');

describe('Test reading in people.json', function () {
    const peopleJson = readPeople();
    const peopleJsonString = JSON.stringify(peopleJson);

    const verifyPath = path.join(__dirname, '../../data/people.json')
    const verifyJsonString = String(fs.readFileSync(verifyPath));

    assert.equal(peopleJsonString, verifyJsonString);
});
