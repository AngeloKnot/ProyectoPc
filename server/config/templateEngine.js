import exphbs from "express-handlebars";
import path, { extname } from "path";

//app: Instancia de express

export default (app) => {
    //configurar el motor de plantillas de express
    //usando express handlebars
    //1. registrar el motot de plantillas
    app.engine(
        'hbs',
        exphbs({
            extname: 'hbs',
            defaultLayout: 'main',
        })
    );

    //2.seleccionar el motor
    app.set('view engine', 'hbs');

    // 3. Establece la ruta de vistas
    app.set('views', path.join(__dirname, '..', 'views'));

    // 4. Retornar la instancia de express

    return app;
};