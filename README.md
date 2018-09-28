# lgk-code-format
A simple script that formats code. It replaces 2 space intents with 4 spaces and double quotes with single quotes.
The script is especially made for projects created with "create-react-app". And it is designed for the use with Visual Studio Code. If you use other editors, it might not work as expected.

Long story short, it turns this:
```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" />
    );
  }
}
```
to this:
```javascript
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App" />
        );
    }
}
```

You should run the script only once. If you use it more than once, you might get 8 spaces indent instead of 4 😅. After running the script, you can delete it from your project folder. It might even be useful to install this package globally:

```
npm i -g lgk-code-format
```
To use it on your project folder then, you can run it like this:
```
lgk-code-format
```
It's important, that you run inside of Visual Studio Code and on the root of your workspace, because the script will work with the config of VS Code.
By default the script formats all files inside of a `./src` folder in your project folder. If you have your code in another folder, just pass it as an argument:
```
lgk-code-format ./my-source
```