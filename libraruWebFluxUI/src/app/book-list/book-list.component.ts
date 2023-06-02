import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books: Book[];

  constructor(private router: Router,
              private bookService: BookService) {
  }


  ngOnInit() {
    this.reloadData();
  }


  deleteBook(id:string) {
    this.bookService.delete(id).subscribe(data =>{this.reloadData()});
  }

  reloadData() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }

  bookDetails(id: string){
    this.router.navigate(['/details', id]);
  }
}
