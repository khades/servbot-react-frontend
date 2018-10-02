module.exports = {
    // setupFiles: ["./enzyme-test-setup.js"],
    // snapshotSerializers: ["enzyme-to-json/serializer"],
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
    "collectCoverage": true,
    "coverageReporters": ["json"], 
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
    }
}