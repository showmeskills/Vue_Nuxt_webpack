const Vue = require('vue');
const express = require('express');
const server = express();

server.get('/',(req,res) => {
    const app = new Vue({
        template: `
        
            <div>
                <h1>{{msg}}</h1>
                there is current visiting router === ${req.url}
            </div>
        
        `,
        data(){
            return{
                msg:'hello nuxt.js'
            }
        }
    })

    const renderer = require('vue-server-renderer').createRenderer();

    renderer.renderToString(app)
        .then(html=>{
            res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                ${html}
            </body>
            </html>
            `)
        })
        .catch(err => {
            throw err;
        })
})




server.listen(8000,()=>{console.log(`server is listening`)})