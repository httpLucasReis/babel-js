# How to install Babel with npm

### Step by step


1. Create a new project
``` bash
npm init 
```

2. Install Babel modules
``` bash
npm install babel-cli babel-preset-env
```

3. Create a new file .babelrc
```javascript
{
  "presets": ["env"]
}
```

4. Configure package.json to run Babel

```javascript
"scripts": {
   "build": "babel ./main.js -o ./bundle.js -w"
}
```
5. Run babel
``` bash
npm run build
```
