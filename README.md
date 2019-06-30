# TaxonFilter

Example of how to filter members of a taxon based on tags using knockout.js. Selecting a tag will remove items from the collection that don't match the tag (e.g. selecting 'snail shell' will remove any items that aren't snail shells).

Possible changes: 
* filters that don't apply to the current set of items shouldn't be shown (e.g. if you select "snail shell" then the filter for "Shape of joined shell" should be hidden as it doesn't apply to snail shells).
* items would link to ... something?

Go here to see it in action (only tested in chrome):

http://htmlpreview.github.io/?https://github.com/kelvinperrie/TaxonFilter/blob/master/demo.html

Here's a GIF of it:

![Example 1](taxon-example1.gif?raw=true "example of filtering in action")

