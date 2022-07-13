import patientData from '../../data/patients.json'
import { NewPatient, Patient } from '../types'
import { v4 as uuidv4 } from 'uuid';

const patients: Array<Patient> = patientData

const getEntries = (): Array<Pick<Patient, "id"| "name" | "dateOfBirth" | "gender"| "occupation">> => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }))
}

const addPatient = ( entry: NewPatient ): Patient => {
  /*  name: string, 
    dateOfBirth: string, 
    ssn: string, 
    gender: string, 
    occupation: string): Patient => { */

    const newPatient = {
        id: uuidv4(),
        ...entry
    }

    patients.push(newPatient);
    return newPatient;

}


export default { getEntries, addPatient }