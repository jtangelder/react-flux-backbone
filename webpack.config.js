var webpack = require("webpack");

// webpack sets the NODE_ENV when calling it with -p or -d
if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

var webpackConfig = {
    cache: true,
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader?insertPragma=React.DOM&harmony" }
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.DefinePlugin({
           "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

if(process.env.NODE_ENV == 'production') {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = webpackConfig;
