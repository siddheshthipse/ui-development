import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreationComponent } from './components/project-creation/project-creation.component';
import { NewLoginPageComponent } from './components/new-login-page/new-login-page.component';
import { EditProjectTemplateComponent } from './components/edit-project-template/edit-project-template.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SampleSearchComponent } from './sample-search/sample-search.component';
import { AuthServiceConfig, GoogleLoginProvider  } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('737706466412-uuumub4vohnks8u5n4hhjd1g2rqr5rot.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectCreationComponent,
    NewLoginPageComponent,
    EditProjectTemplateComponent,
    FilterPipe,
    SampleSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    NgZorroAntdModule, 
    BrowserAnimationsModule, 
    ScrollingModule, 
    DragDropModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }, 
    { provide: NZ_ICONS, useValue: icons },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
