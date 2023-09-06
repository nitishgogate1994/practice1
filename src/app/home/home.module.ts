import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpHomeInterceptor } from './http-interceptor';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, HttpClientModule],
  providers: [
    HomeService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHomeInterceptor, multi: true },
  ],
})
export class HomeModule {}
