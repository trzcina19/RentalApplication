import { Component } from '@angular/core';
import { PropertiesBackendService } from '../../services/properties-backend.service';
import { HttpPropertiesBackendService } from '../../services/http-properties-backend.service';
import { PropertiesService } from '../properties/services/properties.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        PropertiesService,
        { provide: PropertiesBackendService, useClass: HttpPropertiesBackendService }
    ]
})
export class AppComponent {
}
