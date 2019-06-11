# lgk-code-format

## How to use
Open your project in Visual Studio Code, open the terminal and run this command:
```
npx lgk-code-format
```

It's important, that you run the command inside of Visual Studio Code and at the root of your workspace, because the script will work with the config of VS Code.
By default the script formats all files inside of a `./src` folder in your project folder. If you have your code in another folder, just pass it as an argument:
```
npx lgk-code-format ./my-source
```

BTW: You don't need to install this package with `npm i -g lgk-code-format` anymore. Just use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b). If you've previously installed `lgk-code-format` globally, I recommend to uninstall it with `npm uninstall -g lgk-code-format`.

## WTF
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