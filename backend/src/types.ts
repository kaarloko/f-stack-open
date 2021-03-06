export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender {
    male = "male",
    female = "female",
    other = "other"
}

export  interface Patient {
    id: string;
    name: string;
    dateOfBirth: string,
    ssn: string;
    gender: string;
    occupation: string
}

export type NewPatient = Omit<Patient, 'id'>