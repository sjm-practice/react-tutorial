# React Tutorial

This project is a code along exercise for learning React. It is following the official [tutorial](https://facebook.github.io/react/docs/tutorial.html), and was started with a [simple react boilerplate](https://github.com/sjm-practice/simple-react-boilerplate).

## Notes
* I am deviating from the tutorial slightly, in how I organize the code. I will be using more js script files, and will be trying to follow the container pattern when practical.
* Since using ES6, and extending Component...
   - use a constructor to set initial state instead of getInitialState
    - when passing a class method to setInterval, needed to bind this to the method (which doesn't seem to be needed if using React.createClass)
