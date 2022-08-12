import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  moviName : string | undefined;
  movies : any[] = [];
  errorMsg : string = '';
  error : boolean = false;
  pageNumber :number = 1;
  movieDetails : any = null;
  selectedMobi : any = null;

  constructor(private moviesService:MoviesService){}
  
  searchMovi(value : string){
    if(value){
      this.search(value, this.pageNumber);
    }
  }

  search(moviName, pageNumber){
    this.moviesService.searchMovies(moviName, pageNumber).subscribe((res : any[]) => {
      console.log(res);
      if(res['Response'] == 'True'){
        this.error = false;
        this.movies = res;
      } else {
        this.error = true;
        this.errorMsg = res['Error'];
      }
    }, err => console.error(err) );
  }

  previousPage(){
    this.pageNumber = this.pageNumber - 1;
    this.search(this.moviName, this.pageNumber);
  }

  nextPage(){
    this.pageNumber = this.pageNumber + 1;
    this.search(this.moviName, this.pageNumber);
  }

  selectMovi(movi){
    this.selectedMobi = movi;
    this.moviesService.searchMoviesByImdbId(movi.imdbID).subscribe((res : any) => {
      console.log(res);
      this.movieDetails = res;
    }, err => console.error(err) );
  }

}
