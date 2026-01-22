# Install Jest & Babel
```
npm install --save-dev jest @types/jest
npm install --save-dev babel-jest @babel/preset-env
```

https://babeljs.io/setup#installation -> pick jest follow the step


```
npm install --save-dev typescript
```

# Setup TS Project

```
npx tsc --init
```
change module into "ES6" in tsconfig.json

# Setup TS for JEST

https://jestjs.io/docs/getting-started#using-typescript

```
npm install --save-dev @babel/preset-typescript
```

add 
```
'@babel/preset-typescript'
```
into babel.config.js

then 

```
npm install --save-dev ts-jest
npm install --save-dev @jest/globals -> for global
```

