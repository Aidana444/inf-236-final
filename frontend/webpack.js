var base = require('./conf.json').basePath;

module.exports = {
    target: 'web',
    entry: './src/index.jsx',
    module: {
        rules:
            [
                {
                    test: /\.(jsx?$|js?$)/,
                    //exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env","@babel/preset-react"],
                            plugins: ["transform-es2015-arrow-functions"]
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.html/,
                    //exclude: /node_modules/,
                    use: 'html-loader'
                }
        ]
    },

    output: {
        publicPath: base,
    },

    resolve: {
        extensions: ['.css', '.js','.jsx', '.json']
    },
};