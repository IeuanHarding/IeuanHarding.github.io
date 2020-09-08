# IeuanHarding.github.io
Personal Site


Notes general:
- Second run through of personal site.


Features:
- Got the Nav bar working, though not very well.
- Death Star easter egg above Welcome text working.
- Heavy use of bootstrap - including columns and carousel
- Got seperate pages for coding experiments
- Got links for external pages working 




Nav Bar:
- Working roughly as intended, becomes visible upon scroll
- Working the style from the default Bootstrap style is very difficult, so the text color etc. isn't quite how I'd like it
- Other than that, everything else seems to be functional, including links to page elements using invisible divs offset from those elements



Header:
- Uses Jumbotron, bootstrap element
- Got rid of the scrolling background effect from website v1, but it looks much better and was easier to style like this anyway
- Death Star Easter Egg originally made to show I can use animations properly - though eventually I just used class-switching anyway


About Me:
- Main feature is the four pictures, with a covering div and overlay text upon hover
- This feature is all done in CSS
- These pictures are styled using Bootstrap, so they're fully mobile responsive
- The text is less responsive, but it's fine anyway since the screen can't get small enough to make it look ugly


Hobbies:
- Not much to write, except that Bootstrap styling makes this responsive to smaller screens
- Originally there were animations on this, but they looked incredibly tacky
- In the future, implement scroll-in-screen upon scrolling to this section. At the present I can't get it working


Photo Gallery
- Got the carousel working, and fully functional
- It became easier to edit the dimensions of the pictures than to try to style the carousel to fit them properly
- This ended up looking much nicer as well, and most other picture presentation methods would involve some level of editing anyway to fit their dimensions, so this seems like the best solution


Coding Experiments
- The two items there at present are just cleaned-up versions of javascript codes from this course
- The pictures should be links to other pages uploaded as part of this repo
- I wanted to get an API site working for this section as well, but I messed up due to trying to call APIs from my own server. It took me too long to realize this mistake, and so I ran out of time to make another site. This is something for the future, as there are no API calls from this entire site.


Gladiator
- Shows use of input forms, event listeners, inserting into the HTML from Javascript and responsive text.
- Improvements could include more possible editable traits, and better player interaction - I already have some ideas in this direction
- However, I didn't want to spend too much time doing this and have an unfinished site, so this stays as it is for now


Magic 8 Ball
- This was going to be where I put a basic API caller, but as stated above, I ran out of time for that
- Instead, this is from super early in the course, and only shows use of event listeners and inserting into the HTML.
- Improvement could include responsiveness to non-binary questions, though it may be rather difficult to conditionally write things in this manner (maybe responding to the presence of a question mark?)
