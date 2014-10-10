var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /backbone/, loader: "imports?define=>false" },
            { test: /\.js$/, loader: "jsx-loader?insertPragma=React.DOM&harmony" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
           "process.env.NODE_ENV": JSON.stringify('production')
        }),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
