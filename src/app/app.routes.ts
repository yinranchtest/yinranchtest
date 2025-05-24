import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { HomeComponent } from './pages/home/home.component';
import { MediaComponent } from './pages/media/media.component';
import { WeddingsComponent } from './pages/weddings-and-events/weddings/weddings.component';
import { WeddingGalleryComponent } from './pages/weddings-and-events/wedding-gallery/wedding-gallery.component';
import { BrunchComponent } from './pages/brunch/brunch.component';

export const routes: Routes = [{
    path: '',
    component: WrapperComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'media', component: MediaComponent },
        { path: 'weddings', component: WeddingsComponent },
        { path: 'wedding-gallery', component: WeddingGalleryComponent },
        { path: 'brunch', component: BrunchComponent },
    ],
}];
