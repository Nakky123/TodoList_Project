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
  - --text-color: black;

- Font:

  - --roboto: "Roboto", sans-serif;

- No inline CSS

- Padding

  - --padding-y: 10px;

- Border Radius
  - --border-radius: 20px;

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

# Roots

```css
/* Font family Roboto */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
/* Font Awesome */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
:root {
  --border-color: #4e565f;
  --hover-color: gray;
  --border-radius: 20px;
  --roboto: "Roboto", sans-serif;
  --padding-y: 10px;
  --text-color: black;
  --text-size: 18px;
}
* {
  font-family: var(--roboto);
}
```

# Grid & Flex

## Use Grid When

- Complex Layouts: CSS Grid is particularly powerful for creating complex two-dimensional layouts. If your design involves both rows and columns with varying sizes and alignment needs, CSS Grid is a great choice.
- Grid-like Structures: When you need to create a true grid structure with consistent gutters and a clear relationship between items, CSS Grid is more intuitive and efficient.
- Layout Control: CSS Grid offers fine-grained control over the placement of items, making it suitable for creating magazine-like layouts, dashboard designs, and any other layout that requires precise control.
- Overlapping Items: If you need items to overlap each other, CSS Grid provides a simple way to achieve this effect, which can be tricky to do with Flexbox.
- Responsive by Default: CSS Grid allows you to create responsive layouts without relying heavily on media queries. You can use features like fractional units and minmax() to create flexible grids that adapt to different screen sizes.

## Use Flexbox when

- One-Dimensional Layouts: Flexbox is best for arranging items in a single dimension — either as rows or columns. It excels at distributing space along the main axis while handling alignment along the cross axis.
- Equal Height Columns: If you want columns to have equal heights regardless of their content, Flexbox can help you achieve this effect without using additional tricks.
- Content Order: Flexbox allows you to change the order of items visually without affecting the source order in the HTML. This is useful for creating responsive designs where the order of content should change based on screen size.
- Alignment and Distribution: Flexbox is excellent for aligning items both horizontally and vertically, as well as distributing space between them along the main axis.
- Simple Component Layouts: When dealing with simpler components like navigation bars, cards, or buttons, Flexbox is often more straightforward and requires less code than CSS Grid.
- Fluid Resizing: If you want items to dynamically resize to accommodate varying content, Flexbox flexibility can be more suitable.
