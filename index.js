/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';


/**
 * Do string substitution according to the given format.
 * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 *
 * @param {string} format string substitution format
 *
 * @return {string} result data
 */
module.exports = function ( format ) {
    var args = Array.prototype.slice.call(arguments, 1),
        expr = /{(\d+)}/g;

    if ( DEVELOP ) {
        if ( !format ) {
            throw new Error(__filename + ': format string is empty');
        }
        if ( args.length === 0 ) {
            throw new Error(__filename + ': no arguments');
        }
        if ( !expr.test(format) ) {
            throw new Error(__filename + ': format string does not have substitutions: ' + format);
        }
    }

    return format.replace(expr, function ( match, number ) {
        return args[number] === undefined ? match : args[number];
    });
};
