# How to install Babel with npm

### Step by step


1. Create a new project
``` bash
npm init 
```

# Install Babel modules
``` bash
npm install babel-cli babel-preset-env
```

# Create a new file .babelrc
```javascript
{
  "presets": ["env"]
}
```

# Configure package.json to run Babel

```javascript
"scripts": {
   "build": "babel ./main.js -o ./bundle.js -w"
}
```
# Run babel
``` bash
npm run build
```
