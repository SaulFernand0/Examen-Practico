import{ Router } from 'express'

const router = Router();

import * as matriculaCtr from '../controllers/matricula.controller'

const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken, matriculaCtr.readAllmatricula);
router.get('/:id', checkToken, matriculaCtr.readmatricula);
router.post('/add', checkToken, matriculaCtr.creatematricula);
router.put('/update/:id', checkToken, matriculaCtr.updatematricula);
router.delete('/delete/:id', checkToken, matriculaCtr.delmatricula);

export default router;