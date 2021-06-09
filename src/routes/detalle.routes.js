import{ Router } from 'express'

const router = Router();

import * as detalleCtr from '../controllers/detalle.controller.js'

const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken, detalleCtr.readAlldetalle);
router.get('/:id', checkToken, detalleCtr.readdetalle);
router.post('/add', checkToken, detalleCtr.createdetalle);
router.put('/update/:id', checkToken, detalleCtr.updatedetalle);
router.delete('/delete/:id', checkToken, detalleCtr.deldetalle);

export default router;