import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
<<<<<<< HEAD
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
=======
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
>>>>>>> recipe-details

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
<<<<<<< HEAD
    RecipeListComponent
=======
    RecipeDetailsComponent
>>>>>>> recipe-details
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
