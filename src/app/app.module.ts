import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { NicoLogoComponent } from './nico-logo/nico-logo.component';
import { SpheresCanvasComponent } from './spheres-canvas/spheres-canvas.component';

import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WorksComponent,
    AboutComponent,
    NicoLogoComponent,
    SpheresCanvasComponent,
    ObserveVisibilityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
