//el archivo de configuracion debe usar ES5

//importar un administrador de rutas de archivos 
const path = require('path');

//exportamos un objeto de configuraion
//que sera usado por el webpack
module.exports = {
    //1. El archivo de entrada o indexador
    entry: "./client/index.js",
    //2. Especificar el archivo de salida
    output: {
        //2.1 Ruta absoluta de salida
        path: path.resolve(__dirname, "public"),
        //2.2 Nombre del archivo de salida
        filename: "bundle.js"
    },
    //3. configurando el servidor de desarrollo
    devServer: {
        //3.1 Folder de archivos estaticos
        static: path.join(__dirname, "public"),
        //3.2 Puerto del servidor de desarrollo
        port: 8080,
        //3.3 Definiendo el host
        host: "localhost"
    },
    //. Agregando un modulo webpack
    module: {
        rules: [
            {
                test: /\.js$/, //asddffasd.js a.js a.s\.js$
                exclude: /(node_modules | bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'modules': false,
                                        'useBuiltIns': 'usage',
                                        'targets': '> 0.25%, not dead',
                                        'corejs': 3
                                    }

                                ]

                            ]


                        }
                    }

                ]

            }

        ]
    }

}