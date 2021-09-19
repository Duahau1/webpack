var HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./van.loader')
const path = require('path')
module.exports ={
    output:{
        filename: 'main.js',
    },

    module:{
    rules:[
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },

        {
            test: /\.ejs$/,
            use: [
              
                {
            
                    loader:'ejs-loader',
            options: {
                esModule:false,
                variable:'data'
                },
            
            }]
           
          
        }, 
      
    ]
},
plugins: [
    new HelloWorldPlugin({
       // outputFile:"sfsfsf.md"
    }),
    new HtmlWebpackPlugin({
    template: './src/index.ejs',
    title:'dsfdsf',
    inject:false
})],


}