import {Component} from "@angular/core";
import {ArticlesService} from "./articles.service";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  users: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _articlesService: ArticlesService) {

    // Access the Data Service's getUsers() method we defined
    this._articlesService.getUsers()
      .subscribe(res => this.users = res);
  }
}
