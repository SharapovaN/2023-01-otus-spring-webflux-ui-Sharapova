import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../service/book.service";
import {BookSave} from "../model/book-save";
import {Author} from "../model/author";
import {Genre} from "../model/genre";
import {AuthorService} from "../service/author.service";
import {GenreService} from "../service/genre.service";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit{
  id: string;
  book: Book;
  bookSave: BookSave;
  authors: Author[];
  genres: Genre[];

  constructor(private route: ActivatedRoute,private router: Router,
              private authorService: AuthorService,
              private genreService: GenreService,
              private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();
    this.bookSave = new BookSave();

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id)
      .subscribe(data => {
        this.book = data;
      })

    this.authorService.findAll().subscribe(date => {
      this.authors = date;
    });

    this.genreService.findAll().subscribe(date => {
      this.genres = date;
    });
  }

  updateBook() {
    this.bookSave.id = this.book.id;
    this.bookService.update(this.bookSave)
      .subscribe(data => {
        this.gotoDetails(this.book.id);
      });
  }

  onSubmit() {
    this.updateBook();
  }

  gotoDetails(id: string) {
    this.router.navigate(['/details', id]);
  }

  onSelectAuthor(value: number): void {
    this.bookSave.authorId = this.authors[value].id;
    this.bookSave.authorName = this.authors[value].name;
    this.bookSave.authorSurname = this.authors[value].surname;
  }

  onSelectGenre(value : number): void {
    this.bookSave.genreId = this.genres[value].id;
    this.bookSave.genreName = this.genres[value].name;
  }

}
