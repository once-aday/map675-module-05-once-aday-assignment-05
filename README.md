# map675-module-05-once-aday-assignment-05

## Webpack Experimentation

I'm beginning by getting more familiar with webpack. Below is some notes as I am going through the process of building an app according to their starter documentation..

https://webpack.js.org/guides/

I'm saving the webpack-demo project in my https://github.com/newmapsplus/map675-module-05-once-aday repository.

<h3>Installing custom fonts</h3>

In order to use a ttf type font I had to specifically use it's format handler within my style.css file:

`src:  url('./Ranchers-Regular.ttf') format("truetype");`

Support for loading in JSON data from file is built in like so in index.js:

// No warning
import data from './data.json';
