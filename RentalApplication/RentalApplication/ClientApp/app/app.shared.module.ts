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

//***Properties Section***\\
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertiesService } from './components/properties/services/properties.service';
import { PropertiesBackendService } from './services/properties-backend.service';
import { HttpPropertiesBackendService } from './services/http-properties-backend.service';
import { PropertyDetailsComponent } from './components/properties/property-details.component';

//***Addresses Section***\\
import { NewAddressComponent } from './components/addresses/new-address.component';
import { HttpAddressesBackendService } from './services/http-addresses-backend.service';
import { AddressesBackendService } from './services/addresses-backend.service';
import { AddressesService } from './components/addresses/services/addresses.service';
import { AddressesComponent } from './components/addresses/addresses.component';

//***Owners Section***\\
import { NewOwnerComponent } from './components/owners/new-owner.component';
import { HttpOwnersBackendService } from './services/http-owners-backend.service';
import { OwnersBackendService } from './services/owners-backend.service';
import { OwnersService } from './components/owners/services/owners.service';
import { OwnersComponent } from './components/owners/owners.component';



//***Reports Section***\\
import { ReportsComponent } from './components/reports/reports.component';
import { HttpReportsBackendService } from './services/http-reports-backend.service';
import { ReportsBackendService } from './services/reports-backend.service';
import { ReportsService } from './components/reports/services/reports.service';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GrowlModule, ProgressSpinnerModule, ConfirmDialogModule, ChartModule } from 'primeng/primeng';

import '../../node_modules/chart.js/dist/Chart.js'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PropertiesComponent,
        PropertyDetailsComponent,
        NewOwnerComponent,
        OwnersComponent,
        NewAddressComponent,
        AddressesComponent,
        ReportsComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        GrowlModule,
        ProgressSpinnerModule,
        ConfirmDialogModule,
        ChartModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'properties', component: PropertiesComponent },
            { path: 'properties/new-property', component: PropertyDetailsComponent },
            { path: 'properties/property-details/:id', component: PropertyDetailsComponent },
            { path: 'properties/property-update/:id', component: PropertyDetailsComponent },
            { path: 'owners', component: OwnersComponent },
            { path: 'owners/owner-details/:id', component: NewOwnerComponent },
            { path: 'owners/owner-update/:id', component: NewOwnerComponent },
            { path: 'addresses', component: AddressesComponent },
            { path: 'addresses/address-details/:id', component: NewAddressComponent },
            { path: 'addresses/address-update/:id', component: NewAddressComponent },

            { path: 'reports/types-report', component: ReportsComponent },
            { path: 'reports/properties-report', component: ReportsComponent },

            { path: '**', redirectTo: 'properties' }
        ])
    ],
    providers: [
        PropertiesService,
        { provide: PropertiesBackendService, useClass: HttpPropertiesBackendService },
        OwnersService,
        { provide: OwnersBackendService, useClass: HttpOwnersBackendService },
        AddressesService,
        { provide: AddressesBackendService, useClass: HttpAddressesBackendService },

        ReportsService,
        { provide: ReportsBackendService, useClass: HttpReportsBackendService }
    ]
})
export class AppModuleShared {
}
