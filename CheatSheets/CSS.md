# Reading CSS 
Cascading Style Sheets describes how the structured elements in the document are to be rendered on screen, on paper, in speech, or on other media.

A CSS rule contains 2 parts: a selector and declaration.
*Selectors* indicate which element the rule applies to. *Declarations* indicate how the elements referred to in the selector should be styled. Declarations are split into 2 parts: a property and a value.

## Selectors
allows you to target rules to specific elements in an HTML document.
- **UNIVERSAL SELECTOR:** applies to all. targets all elements on the page ex: `* []`
- **TYPE SELECTOR:** matches element names. targets the h1, h2, h3 elements ex: `h1, h2, h3 []`
- **CLASS SELECTOR:** matches an element whose class attribute has a value that matches the one specified after the period operator. ex: `note []` targets an el whose class att has value of note. `p.note []` targets p elements whose class att has value of note.
- **ID SELECTOR:** matches an el whose id attribute has a value that matches the one specified after the `#` symbol. ex: `#introduction []`
- **CHILD SELECTOR:** matches an el that is a direct child of another ex: `li>a []` targets an <a> el that are children of an <li> element. but not other <a> el in the page
- **DESCENDANT SELECTOR:** matches an el that is a descendent of another specified element, not jsut a direct child of that element. ex: `p a []` targets any a elements that sit inside a p element, even if there are other elements nested bw them.
- **ADJACENT SIBLING SELECTOR:** matches an element that is the next sibling of another ex: `h1+p []` targets the first p element after any h1 element, but not other p elements.
- **GENERAL SIBLING SELECTOR:** matches an el that is a sibling of another, although it does not have to be the directly preceding element ex: `h1-p []` if you had 2 p elements that are siblings of an h1 element, this rule would appy to both.


## Properties

*to get layout to do something different: display(block or inline), float, and position(top,right,bottom,left)*

- **`display`**: most important property for controlling layout. used to turn an inline el, into an block-level el, or vice versa. used to hide an element from the page. Every element has a default display value, most being either `block` (block-level element) or `inline` (inline elemet).
  - VALUES:
  - `block-level element`: starts on a new line. `div` is the standard block-level element. `<h1>-<h6>`, `<p>`, `<form>`, `<li>` are common block elements.
  - `inline element`: flow within the text. `span` is the standard inline element. can wrap text inside a paragraph `<span> like this </span>` without disrupting the flow of that paragraph. `a` element is common.
  - `none`: no layout. `script` use this as their default. It is commonly used with JavaScript to hide and show elements without really deleting and recreating them. will render the page as though the element does not exist.
  - `flex`: 
  - `inline-block` element: just like inline but with `width` and `height`. USE THIS INSTEAD OF FLOAT FOR GRID OF BOXES. (DONT NEED TO USE CLEAR) ex:
```
        .box2 {
          display: inline-block;
          width: 200px;
          height: 100px;
          margin: 1em;
        }
```
  - `inline-block` elements can also be used for LAYOUTS. affected by the `vertical-align` property, which you probably want set to `top`. need to set width of each column. There will be a gap between the columns if there is any whitespace between them in the HTML. ex:
      
```
      nav {
        display: inline-block;
        vertical-align: top;
        width: 25%;
      }
      .column {
        display: inline-block;
        vertical-align: top;
        width: 75%;
      }
```
- **`visibility`**: allows you to hide boxes from users but it leaves a space where the element would have been.
  - VALUES:
  - `hidden` blank space will appear in its place. if you DONT want the blank space, USE DISPLAY PROPERTY W/ A VALUE OF NONE.
  - `visible`
- **`position`**: for more complex layouts. a "positioned" element is one whose position is anything except `static`.
  - VALUES:
  - `static`/`normal flow` is the default value. vertically down the page. *not positioned*
  - `relative` same as static but with `top, right, bottom, left`.
  - `absolute` move as users scroll up and down. behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport.
  - `fixed` positioned relative to the viewport. stays in same place even when page is scrolled. `top, right, bottom, left` properties are used. PERCENTS used
- **`float`**: 1. changes the width of an element. 2. other ajacent elements move. 3. adjacent text "floats" around the element. left and right. wrapping text around images. you can take the element out of the normal flow. the floated el becomes a block-level el around which other content can flow. (like text wrap)
- **`clear`**: controlling the behavior of floats. no element should touch the left or right hand sides of a box. so the elements don't overlap.
- **`clearfix`**: the clearfix hack will fix floats when the image is taller than the element so it's overflowing outside of its container.
  - ex: 
```
        .clearfix {
          overflow: auto;
```
- **`Media queries`**: for mobile devices. The `and` keyword is used for combining multiple media features together, as well as combining media features with media types. "Responsive Design" is the strategy of making a site that "responds" to the browser and device that it is being shown on. ex: Let's take our layout that uses percent widths and have it display in one column when the browser is too small to fit the menu in the sidebar:
```
    @media screen and (min-width:600px) {
      nav {
        float: left;
        width: 25%;
  }
     section {
       margin-left: 25%;
  }
}
    @media screen and (max-width:599px) {
     nav li {
       display: inline;
  }
}
```
- **`column`**: make multi-column text. (ex: `.three-column`)
- **`z-index`**: allows you to control which box appears on top. fixes overlapping elements.


####Box Model Properties
- **`box-sizing`**: used to alter the default CSS box model. When you set `box-sizing: border-box;` on an element, the padding and border of that element no longer increase its width. use: use the `-webkit-` and `-moz-` prefixes.
  - VALUES:
  - content box: default style. width and height properties are measured including only the content, but not the padding, border or margin. Note: Padding, border & margin will be outside of the box EX: IF `.box {width: 350px};` THEN you apply `{border: 10px solid black;}` RESULT {rendered in the browser} `.box {width: 370px;}`
  - border box: width and height properties include the padding and border, but not the margin. Note that padding and border will be inside of the box EX:  `.box {width: 350px; border: 10px solid black;}` lead to a box rendered in the browser of `width: 350px`. 





**EXAMPLE STYLES**

BOXES
- width and height
- borders (color, width and style)
- background color and images
- position in the browser window

- **every box has 3 available properties:**
  - 1. **border:** separates the edge of one box from another. 0 pixels wide
  - 2. **margin:** sit outside the edge of the border. gaps.
  - 3. **padding:** think of the padding as extending the content. space bw the border of a box and any content contained within it.
- **..with a `min` or `max` property:**
  - `min-width/height` property is used to set the minimum width of a given element.
    - VALUES of min overrides both max-width/height and width/height.
    - length, percentage
  - `max-width/height` property is used to set the maximum width of a given element.
    - VALUES of max overrides the width/height, BUT NOT the min width/height.
    - none, length, percentage

####CSS units & dots-per-inch
- `1in is always 96px`
- `3pt is always 4px`
- `25.4mm is always 96px`

TEXT
- typeface
- size
- color
- italics, bold, up/low case, small-caps

### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`
