import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
import { AlbumDetailComponent } from './app/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './app/album-photos/album-photos.component';
import { AlbumsComponent } from './app/albums/albums.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailComponent},
  {path: "albums/:id/photos", component: AlbumPhotosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }