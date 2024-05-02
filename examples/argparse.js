const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({
  description: 'Example of using argparse in JavaScript',
});

parser.add_argument('jsonPath', { help: 'Path to the json to read' });
parser.add_argument('-as', '--ageStart', { help: 'Start age to select' });
parser.add_argument('-ae', '--ageEnd', { help: 'End age to select' });

const args = parser.parse_args();

console.log('Path:', args.jsonPath);
console.log('ageStart:', args.ageStart);
console.log('ageEnd:', args.ageEnd);