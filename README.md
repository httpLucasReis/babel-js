# How to install Babel with yarn

### Step by step


1. Create a new project
``` bash
yarn init 
```

2. Install Babel modules
``` bash
yarn add @babel/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/preset-env --dev
```

3. Create a new file .babelrc
```javascript
{
    {
    "presets": [
      "@babel/preset-env"
    ], 
    "plugins": [
      ["@babel/plugin-proposal-class-properties"],
      ["@babel/plugin-proposal-private-methods"]
    ]
  }
}
```

4. Create a main.js or index.js (I will use main.js)

4. Configure package.json to run Babel

```javascript
"scripts": {
   "build": "yarn babel main.js -o main-compiled.js"
   
   // or
   
   "build": "yarn babel main.js -w -o main-compiled.js"
}
```
5. Run babel
``` bash
yarn build 
```
