import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employees/employee.component.html'
    

})

export class EmpoyeeComponent {
    firstName: string = 'Zubayer';
    lastName: string = 'Alam';
    gender: string = 'Male';
    age: number = 20;
    imagepath: string = 'app/employees/images3.jpg';

}