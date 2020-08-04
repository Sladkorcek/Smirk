## Markdown to HTML converter

```bash
# Convert example.md markdown file to test.html HTML file in the same directory 
python convert.py example.md

# Convert example.md markdown file to special.html HTML file
python convert.py example.md --output-file special.html
```

## To do sometime in the future

Here is a list of things (stvari.si ;) ) that will potentially be part of `smirk` libraries one day. 

### General

- custom styling, aka "Let the part of function below the x-axis be blue"
- basic geometric shapes: rectangles, triangles, hexagons, elipses
- basic drawing elements: lines (parallel, perpendicular, custom - froma A to B), arrows, x-s, dots
- text on graphical elements, aka arrow with text and so on
- rounded corners on geometrical shapes
- ability to draw over an image
- ability to create a "variable" from a bunch of graphical elements to use it in the next pictures
- ability to create gifs/animations: instead of student sliding the slider for changing something, it could also be captured in a self-run animation? Maybe just a function that automatically moves slider for x every y seconds? Also usefull for example for showing the mitosis or something similar. Or is it easier to just support video format?
- support for inserting videos? (although, i guess, links are just fine: in that case, where do I upload my photos/videos that i want to include in the document?)

### Math

- 3d coordinate frame
- basic geometric bodies: sphere, cube, pyramid
- graphs
- balls and boxes for combinatorics, being here: also fences and i don't know, sheep?

### Language

- speech bubbles (i mean, who doesn't agree comics are awesome?)
- underlines for clauses

### Physics

- spring (vzmet, fedrca)

### Informatics

- state automata

### Electrotechnics

- symbols for lightbulbs, wires, batteries, diodes, condensators, ...
- drawing version of + and -
- lightning

### Biology

- animations made up of images

### Chemistry

- dunno, ziher kj


Here is a list of to-do suggestions regarding the `stvari.si` platform and not directly `smirk`.

- including the libraries
- document specifying what do you need installed on your computer to use this (if anything)
- fix weird behaviour on mobile devices, where space button doubles the text instead of inserting space
- make documentation more fun to read
- add photos to collection to reference them in a document instead of posting them on third party platform and using the link to there (or at least suggest the user a few ways to upload images)