// Regex to validate url and links (even without http or https)
const REGEX = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
const EXACT_REGEX = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/gi;

// Return an array from all URL address inside the input text
const match = (text) => {
    return text.match(REGEX);
};

// Return true if the input text has at least one URL address
const has = (text) => {
    return REGEX.test(text);
};

// Return true if the input text includes the URL address
const includes = (text, url) => {
    const matches = match(text);

    if (!matches) return false;
    return matches.includes(url);
};

// Return true if the input text match only one URL address without any other characters or whitespaces
const exact = (text) => {
    return EXACT_REGEX.test(text);
};

// Export the functions
module.exports = {
    match,
    includes,
    has,
    exact
};
