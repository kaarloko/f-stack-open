import express from 'express'
import diagnoseService from '../services/diagnoseService'

const router = express.Router()

router.get('/', ( _req, res ) => {
    //res.send('hello from diagnoses')
    res.send(diagnoseService.getEntries())
})

/*
router.post('/', (_req. res) => {
    res.send
})
*/
export default router