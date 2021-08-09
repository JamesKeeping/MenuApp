export interface Patient {
    mrn: number;
    lastname: string;
    firstname: string;
    middleInitial?: string;
    dob: string;
    ssn: string;
    facility: string;
    room: string;
    allergies?: string;
    dietRestrictions?: string;
}