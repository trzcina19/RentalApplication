import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertiesService } from './services/properties.service';

@Component({
    templateUrl: './properties.component.html'
})

export class PropertiesComponent implements OnInit {
    constructor(private propertiesService: PropertiesService) { };

    testowaZmienna = "Pozdrowienia z komponentu";

    ngOnInit(): void {

        this.propertiesService.getProperties().subscribe(
            props => { console.log("Properties:", props) },
            error => { console.log("Error: ", error) }
        );
    }
}