import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { HomeComponent } from './pages/home/home.component';
import { MediaComponent } from './pages/media/media.component';
import { WeddingsComponent } from './pages/weddings-and-events/weddings/weddings.component';
import { WeddingGalleryComponent } from './pages/weddings-and-events/wedding-gallery/wedding-gallery.component';
import { BrunchComponent } from './pages/brunch/brunch.component';
import { CorporateEventsComponent } from './pages/weddings-and-events/corporate-events/corporate-events.component';
import { SpecialOccasionsComponent } from './pages/weddings-and-events/special-occasions/special-occasions.component';
import { TheInnComponent } from './pages/the-inn/the-inn.component';
import { RoomAttheInnComponent } from './pages/the-inn/room-atthe-inn/room-atthe-inn.component';
import { AmenitiesComponent } from './pages/the-inn/amenities/amenities.component';
import { PhotoTourComponent } from './pages/the-inn/photo-tour/photo-tour.component';
import { FlowerFarmComponent } from './pages/flower-farm/flower-farm.component';
import { PavilionComponent } from './pages/flower-farm/pavilion/pavilion.component';
import { YinRanchHomeComponent } from './pages/yin-ranch-home/yin-ranch-home.component';

export const routes: Routes = [{
    path: '',
    component: WrapperComponent,
    children: [
        // { path: '', component: HomeComponent },
        { path: '', component: YinRanchHomeComponent },
        { path: 'media', component: MediaComponent },
        { path: 'weddings', component: WeddingsComponent },
        { path: 'wedding-gallery', component: WeddingGalleryComponent },
        { path: 'brunch', component: BrunchComponent },
        { path: 'corporate-events',component:CorporateEventsComponent},
        { path: 'special-occasions',component:SpecialOccasionsComponent},
        { path: 'the-inn',component:TheInnComponent},
        { path: 'room',component:RoomAttheInnComponent },
        {path: 'amenities',component:AmenitiesComponent},
        { path:'photos',component:PhotoTourComponent},
        { path:'flower-farm',component:FlowerFarmComponent},
        { path:'pavilion',component:PavilionComponent}
    ],
}];
