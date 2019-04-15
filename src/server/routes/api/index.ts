import * as express from 'express';
import apiBlogRoutes from './blogs';

const router = express.Router();

router.use('/blogs', apiBlogRoutes)

export default router;