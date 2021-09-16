const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports ={
    output:{
        filename: 'main.js',
    },
    //target: 'node',
    // resolve: {
    //     fallback: {
    //         path: require.resolve( 'path-browserify' ),
    //     },
    // },
    module:{
    rules:[
        {
            test: /\.ejs$/,
            loader: 'ejs-loader',
            options: {
            variable : 'data' ,
            esModule:false
              },
          
        } 
    ]
},
plugins: [new HtmlWebpackPlugin({
    template: './src/index.ejs',
},
    title='sdfsd'
)],


}