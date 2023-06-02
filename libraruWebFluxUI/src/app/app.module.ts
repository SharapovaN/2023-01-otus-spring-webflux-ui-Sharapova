
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookService } from "./service/book.service";
import { AuthorService } from "./service/author.service";
import { GenreService } from "./service/genre.service";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookUpdateComponent } from './book-update/book-update.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookDetailsComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService, AuthorService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
