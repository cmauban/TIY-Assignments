# Reading CSS

## Selectors

## Properties
- **`display`**: most important property for controlling layout. Every element has a default display value, most being either `block` (block-level element) or `inline` (inline elemet).
  - VALUES:
  - `block-level element`: starts on a new line. `div` is the standard block-level element. `p` and `form` are common block elements.
  - `inline element`: `span` is the standard inline element. can wrap text inside a paragraph `<span> like this </span>` without disrupting the flow of that paragraph. `a` element is common.
  - `none`: `script` use this as their default. It is commonly used with JavaScript to hide and show elements without really deleting and recreating them. will render the page as though the element does not exist.
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

- **`box-sizing`**: When you set `box-sizing: border-box;` on an element, the padding and border of that element no longer increase its width. use: use the `-webkit-` and `-moz-` prefixes.
- **`position`**: for more complex layouts. a "positioned" element is one whose position is anything except `static`.
  - VALUES:
  - `static` is the default value. *not positioned*
  - `relative` same as static but with `top, right, bottom, left`.
  - `absolute` trickiest value. behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport.
  - `fixed` positioned relative to the viewport. stays in same place even when page is scrolled. `top, right, bottom, left` properties are used.
- **`float`**: wrapping text around images.
- **`clear`**: controlling the behavior of floats. so the elements don't overlap.
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


### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`
