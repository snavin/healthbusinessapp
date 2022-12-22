import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Doctors', url: '/folder/Doctors', icon: 'assets/icon/doctor.svg' },
    { title: 'Hospitals', url: '/folder/Hospitals', icon: 'assets/icon/hospital.svg' },
    { title: 'Diagnostics', url: '/folder/Diagnostics', icon: 'assets/icon/diagnostics.svg' },
    { title: 'Patient Medical Record', url: '/folder/Medical', icon: 'assets/icon/medical_record.svg' },
    { title: 'About us', url: '/folder/About us', icon: 'assets/icon/about.svg' },
    { title: 'Contact Us', url: '/folder/Contact', icon: 'assets/icon/contact_us.svg' },
    { title: 'Policy', url: '/folder/Policy', icon: 'assets/icon/policies.svg' },
  ];
  constructor() {}
}
