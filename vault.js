'use strict';
module.exports = function() {


    var vault = {};

    function setValue(key, value){
      vault.key = value;
      return key;
    }

    function getValue(key){
      if (vault.hasOwnProperty(key)){
        return vault.key;
      } else {
        return null;
      }
    }

    return {

    setValue: setValue,
    getValue: getValue

    };

};

// Sets 'secret' values defined by a 'key' word.

// ### Goal

// Create a module that exposes 2 functions.
// work on the `vault.js` file.
// make tests pass

// ##### setValue

// ```
// setValue( key, value )
// ```
// accepts two arguments `key` and `value`.
// will set the `value` in the vault identified by it's `key`.

// ##### getValue

// ```
// getValue( key )
// ```
// accepts one argument `key`.
// will return the `value` that was set if the `key` exists in the vault.
// will return `null` if the `key` does not exist in the vault.