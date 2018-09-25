import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { SearchItem } from './SearchItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loading: Boolean = false;
  public results: SearchItem[];

  constructor(private itunes: SearchService, private titleService: Title) { }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).subscribe( (data) => {
      this.loading = false;
      this.results = data;
    });
    const title = `Search- ${term}`;
    this.titleService.setTitle( title );
  }
}
