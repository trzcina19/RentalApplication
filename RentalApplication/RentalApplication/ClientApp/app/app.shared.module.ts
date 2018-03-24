import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

// Properties Section - import of classes that have been created 
import { PropertiesComponent } from './components/property/properties.component';
import { PropertiesService } from './components/property/services/properties.service';
import { PropertiesBackendService } from './services/properties-backend.service';
import { HttpPropertiesBackendService } from './services/http-properties-backend.service'


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PropertiesComponent //
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'properties', component: PropertiesComponent }, //
            { path: '**', redirectTo: 'home' }
        ])
    ],

    //
        providers: [
            PropertiesService,
            { provide: PropertiesBackendService, useClass: HttpPropertiesBackendService }
        ]

})
export class AppModuleShared {
}
