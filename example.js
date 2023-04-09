const url_validator = require("./url-validator");

console.log(url_validator);

// Test match function
console.log(url_validator.match("https://google.com/first/second/third and site.com/test"));

// Test has function
console.log(url_validator.has("1 https://google.com/first/second/third 2"));

// Test exact function
console.log(url_validator.exact("!!!!"));
console.log(url_validator.exact("https://google.com/first/second/third"));

// Test includes function
console.log(url_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "https://google.com/first/second/third"));
console.log(url_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "bye.net"));
console.log(url_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "xxxxxxxxxxxx.net"));
