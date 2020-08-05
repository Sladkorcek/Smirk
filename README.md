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
- make flashcards float on hover
- make flashcards infinitely turn-over-able (and add the flip effect?)
- add a line or bigger margin to separate the question and the answer better
- add ticks to correct answers on multiple choice and make the border of the correct answer thicker. Actually, add feedback to the chosen answer, tick or a cross. This might be better? I dunno.
- add functionality of having multiple sliders on the same line

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

## stvari.si TODO

Here is a list of to-do suggestions regarding the `stvari.si` platform and not directly `smirk`.

- including the libraries
- document specifying what do you need installed on your computer to use this (if anything)
- fix weird behaviour on mobile devices, where space button doubles the text instead of inserting space
- make documentation more fun to read
- add photos to collection to reference them in a document instead of posting them on third party platform and using the link to there (or at least suggest the user a few ways to upload images)

### Documents

- move visibility to the top of the editor
- add save button among other buttons or somewhere at the top of the editor
- remove lock icon from the field with visibility next to the document name
- add fedback when document is added to a collection
- show checkboxes next to collections so i can see and change in which collections is my document
- visibility dropdown could be prettier
- move button for going fullscreen to the right in the editor
- change the visibility by clicking on the field next to the document name. It's too difficult to go to edit, change visibility AND save.
- back button press after saving the document should redirect me to previous page not back to editing the document
- italic doen't work correctly. If you don't highlight anything and click on bold, it adds four stars, two for each side. If you click bold again, the stars are removed. If you do the same with italic, two stars are added, one for each side. If you click italic again it just adds new stars as it recognizes the pair of stars as bold (it also highlights the bold button) I get it but users might not.
- button for inserting images works weirdly. It adds ![]() but ![] is in mini font size

### Collections

- change the overview of the collectin to display the hierarchy
- add preview of the uploaded image to the page where you create a collection
- display the image of the collection next to it's name also in the overview of that particular collection
- make it easy to remove a document from a collection. It is not clear whether the delete button above the document (when you open document) will delete this document from all collections or will it remove the document from a collection
- make it clear whether adding a document to a collection just link it there or creates a new instance of it
- previews of documents in collection are pretty weird - they show raw text, you can see the \$ signs and the special figures (graphs, flashcards...) are ommited.
- add default image for collections without an image, blank is weird
- when creating a collection it says that description is required but when i don't provide it, it has no problem creating a collection

### Profile

- password reset is at django -> might want to style it a little
- errors at creating a new profile should also highlight the field's that contributed to the error
- does a list of documents show the creation dates or last-edited dates next to each document? it is not clear
- starred and profile buttons lead to the same page
- rethink the layout. If I have 10 collections, my documents are very far down. Maybe have two tabs between user can switch to either see the collections or the documents

### Landing page

- replace stock shapes with our own
- create logo
- learn more page
- footer
- change punctuaion in "They say a picture is worth a thousand words, imagine what an interactive one can do." to ""They say a picture is worth a thousand words ... Imagine what an interactive one can do!"

### Explore page

- display star/unstar according to whether a user has starred a document/collection or no. This will prevent the debug page popup and the error caused by trying to star the thing you have starred before.
- rethink the layout, when many collections are trending, you have to scroll and scroll and scroll to get to the documents. Maybe limit it to 3 collections and then add button "see more" that redirects to a site that only contains trending collections. Same for documents.