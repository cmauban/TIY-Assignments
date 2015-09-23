#HyperText Markup Language
used for creating and visually representing a webpage. it determines the content of the webpage, but NOT its functionality. HTML allows you to create links that allow visitors to move from one page to another quickly and easily.

**Block-level Elements**: formatting- begins on new line. occupies the entire space of its parent element (container).  contains inline elements and other block-level elements. `<h1> <p> <ul> <li>`

**Inline Elements**: formatting- start anywhere in a line. continue on same line. occupies only space bounded by the tags that define the inline element. `<a> <b> <em> <img>`

####Structure of an HTML tag:
Tags act like containers. they tell you something about the info that lies between their opening and closing tags. Elements are made up of two tags (an opening and closing tag). tag and element are often used interchangeably.
- `<p>`: OPENING TAG- left-angle bracket, character, right-angle bracket.
- `</p>`: CLOSING TAG- left-angle bracket, forward slash, character, right-angle bracket.
- "self-closing" tag- closes itself. no children. ex: `<img> <link> <meta> <hr>`

**Three Types of Content Categories:**
- 1. main- describe common content rules shared by many elements
- 2. Form- describe content rules common to form-related elements
- 3. Specific- describe rare categories shared only by a few elements
- 4. flow- flows to fill the container

### Attributes
tell us more about the contents of an element. They appear on the opening tag of the element and are made up of two parts: a name & a value (separated by an equal sign.)

global attributes common to all HTML elements:
* `class` -- a space-separated list of semantic category names for that element.
* `id` -- a unique identifier which MUST be unique in the whole document.
* `title` -- a short textual description of purpose
* `lang` -- describe what language it should read
* `style` -- contains styling declarations to be applied to the element. Styles are defined in separate files. allows for quick styling and testing purposes.

## `<html>`
anything between the tag is HTML code. the main enchilada, the whole `document`, that which wraps all the others... except for `<!DOCTYPE>`
* _parents_: none, it's the top
* _content_: _only_ `<head>` and `<body>`
* _display_: `block`

## `<!DOCTYPE>`
Bc their are so many versions of HTML, each webpage should begin with a DOCTYPE. Doctype is a declaration, NOT a tag. it informs the browswer which version of HTML (or XML) you used to write the document.
* _parents_: nothing before it, not even a space.
* _content_: entire html
* _display_: block

## `<head>`
before the body element. contains info about the page. usually a `<title>` is inside of the head.
* _parents_: `<html>`
* _content_: flow content
* _display_: block

## `<body>`
everything inside of the body tag is shown inside the main browser window.
* _parents_: must be second element of an `<html>` element.
* _content_: sectioning root
* _display_: block

## `<title>`
defines the title of the doc. the contents of the title element are either shown in the top of the browser, above where you type in the URL of the page (browswer's title bar).
* _parents_: `<head>` that contains no other `<title>` element.
* _content_: Metadata content
* _display_: block

## `<p>`
to create a paragraph. by default, a browser will show each paragraph on a new line with some space between it and any subsequent paragraphs.
* _parents_: any element that accepts flow content
* _content_: flow content, palpable content.
* _display_: block

## `<div>`
or HTML Document Division Element. it could be used to group elements for styling purposes (using `class` or `id` attributes.A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead. 
* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

## `<!-- comment goes here -->`
adding a comment to your code that will not be visible in the user's browser.
* _parents_: n/a
* _content_: n/a
* _display_: block

## `<span>`
generic inline container for phrasing content that does not inherently represent anything. used to group elements for styling purposes or because they share the same attribute values. kind of like the `<div>` element but `<div>` is block-level. you will usually see a `class` or `id` attribute with span.
* _parents_: any element that accepts phrasing or flow content
* _content_: phrasing content
* _display_: inline

## `<button>`
represents a clickable button.
* _parents_: any element that accepts phrasing content
* _content_: phrasing content, flow content, listed, palpable..
* _display_: inline

## `<nav>`
represents a section of a page that links to other pages or parts within the page: a section with navigation links.
* _parents_: any element that accepts flow content
* _content_: flow content
* _display_: block
 
## `<meta>`

* _parents_: `<head>`
* _content_:
* _display_: 

**-----LIST ELEMENTS-----**
use the `list-style-type` property.

## `<ul>`
unordered list element. uses bullets.
* _parents_: any element that accepts flowing content
* _content_: flow content. zero or more `<li>` elements, eventually mixed with `<ol>` and `<ul>` elements.
* _display_: block

## `<ol>`
ordered list. uses numbers.
* _parents_: Any element that accepts flow content.
* _content_: Zero or more `<li>` elements
* _display_: block

## `<li>`
list item. each item in the list is placed between an opening and closing tag. browsers indent lists by default.
* _parents_: `<ul>` and `<ol>` OR `<menu>`
* _content_: none.
* _display_: block

## `<dl>`
definition list. encloses a list of pairs of terms and descriptions. usually consists of a series of terms and their definitions. Common uses for this element are to implement a glossary or to display metadata, a list of key-value pairs.
* _parents_: 
* _content_: inside dl you usually see pairs of `<dt>` and `<dd>` elements.
* _display_:

## `<dt>`
used to contain the term being defined. This element can occur only as a child element of a `<dl>`. It is usually followed by a `<dd>` element; however, multiple `<dt>` elements in a row indicate several terms that are all defined by the immediate next `<dd>` element.
* _parents_: `<dl>`
* _content_: none
* _display_:

## `<dd>`
used to contain the definition. This element can occur only as a child element of a definition list and it must follow a `<dt>` element.
* _parents_: After a `<dt>` or a `<dd>` element, inside a `<dl>`
* _content_: n/a
* _display_:

**-----FORM ELEMENTS-----**

## `<form>`

* _parents_: 
* _content_:
* _display_:

## `<input>`

* _parents_: 
* _content_:
* _display_:

## `<label>`
each form control should have its own label element as this makes the form accessible to vision-impaired users. it can be used in two ways:
 - 1. wrap around both the text description and the form input
 - 2. be kept separate from the form control and use the for attribute to indicate which form control it is a label for.
* _parents_: 
* _content_:
* _display_: inline

## `<fieldgroup>`

* _parents_: 
* _content_:
* _display_:

## `<legend>`
comes directly aftr the opening fieldset tag and contains a caption which helps identify the purpose of that group of form controls.
* _parents_: `<fieldset>`
* _content_:
* _display_:

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
