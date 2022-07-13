import express from 'express'
import patientsService from '../services/patientService'
import toNewPatient from '../utils'


const router = express.Router()

router.get('/', ( _req, res ) => {
    //res.send('hello from diagnoses')
    res.send(patientsService.getEntries())
})

router.post('/', (req, res) => {
    try{
        const newPatientEntry = toNewPatient(req.body)
        const newPatient = patientsService.addPatient(newPatientEntry);
        res.json(newPatient)
    } catch (e) {
        res.status(400).send('THIS IS ERROR');
    }
})


export default router