module.exports = function(wallaby) {
    return {
        files: [
            "src/**/*.ts"
        ],
        tests: [
            "test/*.ts"
        ],  
        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                "module": "es2020",
                "target": "es2020",
                "sourceMap": true,
                "inlineSources": true
            })
        }
    };
}