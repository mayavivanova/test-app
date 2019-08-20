Test App

### `npm install`
### `npm start`




# HTML/CSS/JS TEST SPECIFICATION AND REQUIREMENTS

## Page UI

- Liquid layout
- max content wrapper width: 1280px, min widht: 800
- content centered on the page
- right column width: 30% of content wrapper
- left column and right column padding 10px
- - - either column can lead the height of the page
- page main title - embed font -> HelveticaInserat LT
- logo element must be fixed at all time at the left border of the page

### Dynamics

- main navigation, drop down menu based on JS - don't use ready scripts
- right column dynamic boxes:
- - - click to open, click to close
- - - two boxes must not be open in the same time 

### Language menu

- hover makes flag opaque
- selected flag is opaque

### Misc

- font sizes and box sizes may be in %, px or em

## Table Task

1. Your script must be able to handle number of columns dynamically (i.e. more or less columns, depending on the JSON sent)
- - - we are going to test the table with different JSONs during the test review
2. Get sample content with XMLHTTP/FETCH request from here: http://cdn.sbtech.com/rj/mocks/MOCK_DATA.json
3. Decide on the table HTML structure by yourself (table/div... etc.)
4. Implement sorting on the column headers (Click on table header sorts by the column ASC/DESC)
5. Implement pagination (top and bottom of the table) 100 lines per page

### Table presentation

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | ... |
-------------------------------------------------
|  **Title Foo**  |    ...    |  **Title Bar**  |
-------------------------------------------------
|    Foo value    |    ...    |    Bar value    |
-------------------------------------------------
|    Foo value    |    ...    |    Bar value    |
-------------------------------------------------
|                      ...                      |
-------------------------------------------------
|    Foo value    |    ...    |    Bar value    |
-------------------------------------------------
|    Foo value    |    ...    |    Bar value    |
-------------------------------------------------
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | ... |

## Technical requirements

### Mandatory tech stack

- TypeScript 3.x
- React 16.6.x (NO REDUX!)
- MobX
- Any styles pre-processor

### Cross-browser

- 11+
- Edge
- FF
- Chrome

## What are we checking about your code:

- structure
- quality
- consistency
- reusability

## !!! IMPORTANT !!!

## Your test does NOT qualify for review if:

- CSS "frameworks"
- You somehow included jQuery to the tech stack
- We need to fiddle with your code to make it work
- Code doesn't use one or more of the mandatory tools
- JSON content is not loaded with AJAX from the provided url

## Bonus points

Bonus points to the task completion are going to be awarded for:

- Unit Tests
- Code Linting