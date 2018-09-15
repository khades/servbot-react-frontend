module.exports = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.js$": "babel-jest"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
}