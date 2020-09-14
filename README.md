# map675-module-05-once-aday-assignment-05

## Webpack, React and Map Experimentation

I'm beginning by getting more familiar with webpack. Below are some notes as I am going through the process of building an app according to starter documentation..

https://webpack.js.org/guides/

I'm saving the webpack-demo project in my https://github.com/newmapsplus/map675-module-05-once-aday repository.

<h3>Installing custom fonts</h3>

In order to use a ttf type font I had to specifically use it's format handler within my style.css file:

`src:  url('./Ranchers-Regular.ttf') format("truetype");`

Support for loading in JSON data from file is built in like so in index.js:

// No warning
import data from './data.json';

<h3>React and Mapping</h3>

React uses webpack and a host of other npm packages to initialize and run.

I'm going through a number of mapbox examples to determine the different ways to integrate web maps with react:

https://github.com/mapbox/mapbox-react-examples

The "Basic" example:

Index.js appears to be the entry Point for the npm start script.
The ReactDOM element renders the App.js function from './app' directory and then calls the 'root' element in the DOM:

```
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

App.js renders the Map by calling Map from Map.js. So the process so far to get to the map is Index > App.js > Map.js. The only item that is called within App.js is the Map so that Map is all we see on the final homepage.

```
function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
```
Map.js has two main sections: The building of the Map and it's configuration. They are contained within a:
 `const Map = () => {}`
object, and the HTML of how to visually render the map is represented inside a return() statement containing div elements.

There is a useEffect function that initializes the map when the component mounts. Within useEffect is all the typical Mapbox GL JS code to start a new map. The config for zoom, tiles, navigation controls, mouse movements, etc. is all here.  There is a return statement within useEffect that is called when the map component is unmounted:
`return () => map.remove();`

The information box that has the coordinates display for the UI is styled within a .css file, map.css, which is imported in the beginning of Map.js:

`import './Map.css';`

So any div's that are called within in the component can be styled based on the css from that file. Here the div className='sidebarStyle' and div className='map-container' ref={mapContainerRef} are styled using the css from Map.css:

```
.map-container {
  position: absolute;
  top: 0;
...
}

.sidebarStyle {
  display: inline-block;
...
}
```

<h3>Data overlay example</h3>

The package.json is similar in this example to the basic examples.

It follows the same structure. Index.js > App.js > Map.js

Within the const map object there is an array of options containing Mapbox Expressions (with data-driven class break stops/colors ) styling rules as well as identifiers for different map layers.

There is a `const [active, setActive] = useState(options[0]);` declaration. This appears to be what is monitored by the app to trigger changes to the layer styling.

A single layer, countries, is added to the map when it appears. Based on which option (from the options array) is active, the layer is restyled (using the mapbox gl js setPaint method) based on the rules given.

There is a Paint object `const paint = () => {}` that ensures the paint stylings of the map layer are always set to the active option (from the options array).

There is a `const changeState = i => {}` object that tells the component what to do when changeState is called.

changeState is baked into the functionality of the HTML/UI of Map.js. When you click on the OptionsField component (this is an HTML UI element/component and is in a seperate file, 'components/Optionsield.js')
Optionsfield.js is similarly structured as Map.js. It has a const `const Optionsfield = (props) => {` object and also returns some HTML/UI code to render.

  From Map.js when optionsField is called in the HTML:

  ```
  <Optionsfield
        options={options}
        property={active.property}
        changeState={changeState}
        />
  ```

In this case the optionsField is passed the current properties of the map layer (the state) and can execute the ChangeState function/code from within itself.

The optionsfield.js component returns a togglebox interface with connections to the state of the map and the ability to run changeState() when the button is toggled.

Note: The end of optionsfield.js has a `export default Optionsfield;` line that seems to be pretty standard for each unique component file.

So all in all the code is fairly complex but the components are fairly self contained and modular.

The Legend.js component is also dynamically populated and styled. It takes the active option data and renders it on the map:
`<Legend active={active} stops={active.stops} />`


<h3>Data overlay example (with redux)</h3>


So are the App.js and Map.js calls to render the map.

App.js
Map.js
