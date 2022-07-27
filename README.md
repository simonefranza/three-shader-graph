# three-shader-graph

This website is a tool to create GLSL shaders using a shader graph.
The UI is heavily inspired by Blender's Shader Graph, to give the users
a seemless experience, when working with the two.

Three-shader-graph empowers the users by providing an easy to use interface.

Do you know that feeling when you created an object in Blender with 
amazing materials, just to find out that you cannot import them in Three.js?
This tool solves this problem. 

Create your materials in Blender and then
recreate them in three-shader-graph to instantly get an idea of how the material 
will look. After you are happy with the result export the GLSL code and 
use it in your projects! 

Try it out [here](https://simonefranza.github.io/three-shader-graph/)!

<img width="1030" alt="example" src="https://user-images.githubusercontent.com/6499758/181002198-a107f006-c55e-4dfb-8137-9a5164057f9c.png">

Note:

This project is still in its early stages, so the functionality is still limited
and there might be bugs and issues. If you find one feel free to open an issue.

## Usage

- Use the purple line that separates the graph from the scene to resize one or the other
- Add nodes to the graph (see Shortcuts)
- Connect them by clicking on the small circles and dragging the mouse to the destination
- The shader recompiles automatically
- Click and drag a node to move it around
- Scroll to zoom and if you use a touchpad use two fingers to move the graph around

## Shortcuts

- Shift + A : opens the menu to add a new node to the graph
- Shift + W : changes the orientation of the view from left - right, to top - bottom and viceversa
- X (when a node is selected) : delete the node

