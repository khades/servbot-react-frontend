module.exports = {
    setupFiles: ["./enzyme-test-setup.js"],

    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"]
}