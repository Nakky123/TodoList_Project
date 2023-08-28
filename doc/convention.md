# General

- `index.css` must be on top so that it has lower power than specific components.  
  Example:

  ```jsx
  import "./index.css";
  import App from "./App";
  ```

- CSS reset is used to remove default style of the browser. CSS reset can be found in [index.css]

- Colors:

  - --border-color: #4e565f;
  - --hover-color: gray;
  - --border-radius: 20px;
  - --roboto: "Roboto", sans-serif;
  - --padding-width: 10px;
  - --text-color: black;

- Font:

  - font-family: var(--roboto);

- No inline CSS

# Project structure

```
|--- docs/
|    |--- convention.md
|
|--- public/
|
|--- src/
|    |--- assets/
|    |    |--- favicon.png
|    |
|    |--- components/
|    |    |--- DateDisplay/
|    |    |        |--- DateDisplay.css
|    |    |        |--- DateDisplay.jsx
|    |    |--- TodoItem/
|    |    |        |--- TodoItem.css
|    |    |        |--- TodoItem.jsx
|    |    |--- TodoList/
|    |    |        |--- TodoList.css
|    |    |        |--- TodoList.jsx
|    |--- App.jsx
|    |--- index.css
|    |--- main.css
|
|--- index.html
|--- package.json
```

- `docs` folder contains documentations like `convention.md`
- `src` folder is where most of coding is done. It contains the root component `main.jsx` and its css `index.css`, and many other files/components.
  - `assets` folder contains images
  - `Components` folder contains all react components. Each component has its css file.  
    **Example:** in `DateDisplay` folder, there are `DateDisplay.jsx` and `DateDisplay.css`
    ```
    |--- DateDisplay/
             |--- DateDisplay.css
             |--- DateDisplay.jsx
    ```

# Naming Convention

- Component name: capitalized. Example: `TodoList.jsx`
- Function name: PascalCase. Example: `TodoList (){...}`
- Variable name: camelCase. Example: `const handleEditTodo = ...`
- CSS class name: small letter with dash and camelCase . Example: `.add-btn` & `todoEnter`

# Annotation rule

- Use `//` for single line comment
- Use **jsdoc syntax** for multiline comment:
  - Example:
    ```javascript
    /*
     * Multi line
     * comment
     */
    ```

# HTML semantic guide

- Use lower case for native HTML tag. No upper case or mixed.
  Example:

  ```html
  <!-- This is right -->
  <main>...</main>
  ```

- Use as many semantic tags as possible. Some of the semantic tags are:
  - `<section>`
  - `<header>`
  - `<footer>`
  - `<main>`
  - `<nav>`
