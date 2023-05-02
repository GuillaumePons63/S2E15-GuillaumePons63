require('dotenv').config();
const express = require('express');
const app = express();
const { param } = require('express-validator');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const errorHandlers = require('./handlers/ErrorHandlers');

const useGithubAuth = require('./auth/github');
const usersRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');
const categoriesRoutes = require('./routes/api/categories');
const productsRoutes = require('./routes/api/products');
const couponsRoutes = require('./routes/api/coupons');
const rolesRoutes = require('./routes/api/roles');
const cartRoutes = require('./routes/api/cart');
const orderRoutes = require('./routes/api/order');
const installRoute = require('./install');

const port = process.env.PORT || 5000;

//app.set('query parser', 'simple'); // Ne parse les query string qu'en string, pas en objets ou autre format de données.
//* Cors doivent paramétrés pour n'autoriser que quelques app,
//* sauf si vous faites une API  public
app.use(cors('*'));

/**
 * PASSPORT PLUGIN
 */
passport.serializeUser(function (user, done) {
    done(null, user);
});
//   and deserialized.
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

useGithubAuth();
/** FIN PASSPORT PLUGIN */

app.use(express.json({ limit: '5mb', extended: false }));

app.get('/', (req, res) => res.send('API running'));

app.get('/install', installRoute); // Installation de l'application

app.get(
    '/uploads/:image',
    param('image', 'image is incorrect').escape().isString(),
    async (req, res) => {
        res.set('Content-Type', 'image/*').sendFile(
            `uploads/${req.params.image}`,
            { root: './' }
        );
    }
);

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
/**
 * passpport plugin
 */
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
/** fin passport plugin */
//
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/coupons', couponsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.use(errorHandlers.notFound);

// On affiche plus d'infos si on est development

if (app.get('env') === 'development') {
    app.use(errorHandlers.errorsCollector);
} else {
    // Les messages d'erreurs pour la prod
    app.use(errorHandlers.collectErrors);
}

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`);
});
