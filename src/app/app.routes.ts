import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { YinRanchHomeComponent } from './pages/yin-ranch-home/yin-ranch-home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [{
    path: '',
    component: WrapperComponent,
    children: [
        // { path: '', component: HomeComponent },
        { path: '', component: YinRanchHomeComponent },
        { path:'about-us',component:AboutUsComponent},

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
}];
