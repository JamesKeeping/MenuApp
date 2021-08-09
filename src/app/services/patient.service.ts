import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

constructor(private http: HttpClient) { }

  patientFound: boolean = false;

  patient :Patient[] = [
            {
                mrn: 1234,
                lastname: 'tester',
                firstname: 'patient',
                dob: '01/01/1985',
                ssn: '555-72-1111',
                facility: 'BMC',
                room: 'B524'
            },
            {
              mrn: 4567,
              lastname: 'tester',
              firstname: 'patient',
              dob: '01/01/1985',
              ssn: '555-72-1111',
              facility: 'BMC',
              room: 'B524'
          },
          {
            mrn: 1434,
            lastname: 'tester',
            firstname: 'patient',
            dob: '01/01/1985',
            ssn: '555-72-1111',
            facility: 'BMC',
            room: 'B524'
        }
        ]
  
  getPatientByMRNandLN(mrn: number, lastname: string) {

  }


  
}