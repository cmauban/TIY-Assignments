#HyperText Markup Language
used for creating and visually representing a webpage. it determines the content of the webpage, but NOT its functionality.

Tags act like containers. they tell you something about the info that lies between their opening and closing tags. Elements are made up of two tags (an opening and closing tag). tag and element are often used interchangeably.
- `<p>`: OPENING TAG- left-angle bracket, character, right-angle bracket.
- `</p>`: CLOSING TAG- left-angle bracket, forward slash, character, right-angle bracket.

## `<html>`
anything between the tag is HTML code. the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

####Structure of an HTML tag:
* _parents_: none, it's the top
* _content_: _only_ `<head>`(before the body element. contains info about the page. usually a `<title>` is inside.) and `<body>`(everything inside is shown inside the main browser window)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!


### Attributes
tell us more about the contents of an element. They appear on the opening tag of the element and are made up of two parts: a name & a value (separated by an equal sign.)

* `class` -- a space-separated list of category names
* . . .

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

. . .

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
