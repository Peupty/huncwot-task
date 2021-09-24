# Run development server

1. Install dependancies using yarn or npm by running following commands:
  - > yarn install
  - > npm install
2. To run a development server on your machine run 'yarn start' or 'npm start'. This will create a local development server on port 3000. You can edit the port inside the webpack.dev.js file:
``` javascript
...
devServer: {
  port: 3000,
  ...
}
```

3. Open your internet browser and navigate to http://localhost:3000 or you

# Build project

1. To build the project simply run the 'build' script with 'yarn' or 'npm'
2. This creates 'dist' directory with all the files bundled up
3. You can make changes to build configuration in webpack.build.js file

