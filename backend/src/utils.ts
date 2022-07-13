import { NewPatient } from "./types";
import { Gender } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };
  

const parseField = (name: unknown): string => {
    if(!name || !isString(name)) {
        throw new Error('invalid field, not good')
    }
    return name
    
}

const parserGender = (gender: unknown): string => {
    const pars = parseField(gender)
    if(pars === "male") return Gender.male
    if (pars === "female" ) return Gender.female
    if ( pars === "other" ) return Gender.other
    
    throw new Error('invalid genderrrrr')
}

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown }

const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
    const newEntry: NewPatient = {
        name: parseField(name),
        dateOfBirth: parseField(dateOfBirth),
        ssn: parseField(ssn),
        gender: parserGender(gender),
        occupation: parseField(occupation)
    }

    return newEntry
}

export default toNewPatient