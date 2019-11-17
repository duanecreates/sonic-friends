# Sonic Friends

## JSON Server Configuration
The default URL for JSON Server is ```http://localhost:3000```, but you can set this and [more](https://github.com/typicode/json-server) inside of ```json-server.json```.

## Axios
Axios can take certain configurations as default. Go to ```main.js``` to set accordingly.  
In this case ```axios.defaults.baseURL``` is set to the default URL of JSON Server to prevent having to write the whole URL for each API request.  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
