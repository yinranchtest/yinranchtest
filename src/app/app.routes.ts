import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { YinRanchHomeComponent } from './pages/yin-ranch-home/yin-ranch-home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LodgingComponent } from './pages/lodging/lodging/lodging.component';
import { LodgingDetailsComponent } from './pages/lodging/lodging-details/lodging-details.component';
import { VenuesComponent } from './pages/venues/venues/venues.component';
import { VenueDetailComponent } from './pages/venues/venue-detail/venue-detail.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';
import { AdminwrapperComponent } from './admin/adminwrapper/adminwrapper.component';

export const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: YinRanchHomeComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactComponent },
            { path: 'lodging', component: LodgingComponent },
            { path: 'lodging/:id', component: LodgingDetailsComponent },
            { path: 'venues', component: VenuesComponent },
            { path: 'venues/detail', component: VenueDetailComponent }

            // { path: 'media', component: MediaComponent },
            // { path: 'weddings', component: WeddingsComponent },
            // { path: 'wedding-gallery', component: WeddingGalleryComponent },
            // { path: 'brunch', component: BrunchComponent },
            // { path: 'corporate-events',component:CorporateEventsComponent},
            // { path: 'special-occasions',component:SpecialOccasionsComponent},
            // { path: 'the-inn',component:TheInnComponent},
            // { path: 'room',component:RoomAttheInnComponent },
            // { path: 'amenities',component:AmenitiesComponent},
            // { path:'photos',component:PhotoTourComponent},
            // { path:'flower-farm',component:FlowerFarmComponent},
            // { path:'pavilion',component:PavilionComponent}
        ],
    },
    {
        path: 'admin',
        component: AdminwrapperComponent,
        children:[
            { path:'',component: EnquiriesComponent}
        ]
    }
];
