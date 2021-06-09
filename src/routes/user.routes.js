import{ Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken, userCtr.readAllUsers);
router.get('/:id', checkToken, userCtr.readUser);
router.post('/add', checkToken, userCtr.createUser);
router.put('/update/:id', checkToken, userCtr.updateUser);
router.delete('/delete/:id', checkToken, userCtr.delUser);

export default router;