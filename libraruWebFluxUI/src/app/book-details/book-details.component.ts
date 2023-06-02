import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../model/book";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id: string;
  book: Book;

  constructor(private route: ActivatedRoute,private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id)
      .subscribe(data => {
        this.book = data;
      })
  }

  bookUpdate(id: string){
    this.router.navigate(['/update', id]);
  }
}
