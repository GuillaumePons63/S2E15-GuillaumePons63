const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    console.log(token);
    if (!token) {
        // return res.status(401).json({ msg: 'Auth denied' });
        const error = new Error('Encore une catastrophe');
        error.status = 401;
        return next(error);
    }

    try {
        const decoded = jwt.verify(token, process.env.APP_SECRET);

        req.user = decoded.user;

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = auth;
