import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { HomeComponent } from './Views/home/home.component';
import { KtlGuard } from './Services/ktl.guard';
import { SelectBereichComponent } from './Views/select-bereich/select-bereich.component';
import { BereichGuard } from './Services/bereich.guard';
import { TeamComponent } from './Views/team/team.component';
import { ContactComponent } from './Views/contact/contact.component';
import { AboutComponent } from './Views/about/about.component';
const routes: Routes = [
  {
    path: '', canActivate: [BereichGuard], children: [
      { path: 'login', component: LoginComponent },
      { path: 'teile', component: HomeComponent, canActivate: [KtlGuard] },
      { path: 'team', component: TeamComponent, canActivate: [KtlGuard] },]
  },
  { path: 'selectbereich', component: SelectBereichComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
