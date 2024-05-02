----------------------------------------------------

# Setup & Testing

Open the `package.json` file.
Run `npm install` to install the packages located and registered in the 
`dependencies` property.

In the `scripts` property you can see already registered scripts
`start` and `test`.

The application should run by entering:
`npm start` 
in your terminal which executes the `start` script.

To verify if your solution does read the json correctly in `read-people` you can run
`npm run test`
The command line should then only show 
`N passing`
and non
`N failing`
messages.

----------------------------------------------------

# Tasks

1. Read in the JSON containing information about several people from `data/people.json` from the filesystem to memory.
`fs.readFileSync`

2. Append an entry about an imaginary person in the format of a people entry of the json to the file and write it to memory.
`fs.writeFileSync`

3. Find/Filter/Transform the list at in the program by the following conditions:
    1. People with ages between [17 - 66] (including both 17 and 66 in the resulting list)
    2. People with an email address ending in `@yahoo.com` 

4. Sort the selected entries by their id.

5. Then print out this information/rows as a table using the `table` package.
(Note: The `address` field needs to be removed to be properly displayed in a table and `address.city` and `address.country` need to be
added to the item of the person they were extracted from)

6. Verify if your solution produces the correct output using `npm run test`

----------------------------------------------------


## Bonus Task:
Implement the function `tableToHtml` converting the resulting rows of json data to a html representation in the following format:
```
const inputData = [
    ['Name', 'Age'],
    ['Franz', 19],
    ['Hansi', 43],
];
const outputData = `\
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Franz</td>
        <td>19</td>
    </tr>
    <tr>
        <td>Hansi</td>
        <td>43</td>
    </tr>
</table>`;
```

----------------------------------------------------

## Bonus Task:
Read people.json and transform the people entries by associating
the country value with a list of `people` living in that country.
And write that data to data/cities.json with `fs.writeFileSync`

The resulting data should look like this:
```
{
    "Sudan": {
        "people": [
            {
                "id": 40,
                "name": "John Shoemaker",
                "age": 23,
                "email": "Lorine62@yahoo.com",
                "city": "City1"
            }
            {
                "id": 9,
                "name": "Kitty Aufderhar",
                "age": 29,
                "email": "Lorine62@yahoo.com",
                "city": "South Adelbert"
            }
        ]
    }
}
```