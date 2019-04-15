import * as express from 'express';
import * as passport from 'passport';

import apiBlogRoutes from './blogs';

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false}, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })
});

router.use('/blogs', apiBlogRoutes);

export default router;