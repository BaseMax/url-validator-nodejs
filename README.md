# url-validator-nodejs

This is a simple module for validating urls in nodejs and javascript that help you to extract urls from a text, check if a text has a url, check if a text has a specific url, and check if a text is excatly a url.

## Features

- Extract all urls from a text
- Check if a text has a url
- Check if a text has a specific url
- Check if a text is excatly a url

## Using

Import the module:

```javascript
const url_validator = require("./url-validator");
```

Then you can extract all urls from a text:

```javascript
console.log(url_validator.match("https://google.com/first/second/third and site.com/test"));
```

Or you can check if a text has a url:

```javascript
console.log(url_validator.has("1 https://google.com/first/second/third 2"));
```

Or you want to check your input is excatly a url:

```javascript
console.log(url_validator.exact("!!!!"));
console.log(url_validator.exact("https://google.com/first/second/third"));
```

Or you can check if a text has a specific url:

```javascript
console.log(url_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "https://google.com/first/second/third"));
console.log(url_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "bye.net"));
console.log(url_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "xxxxxxxxxxxx.net"));
```

Copyright 2023, Max Base
