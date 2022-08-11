import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient,private configService: ConfigService) {}

  searchMovies(moviName:string, pageNumber : number){
    const httpParams = new HttpParams().set('s', moviName).set('page',pageNumber)
    return this.http.get(this.configService.getBaseUrl(), { params : httpParams});
  }

  searchMoviesByImdbId(imdbID : number){
    const httpParams = new HttpParams().set('i',imdbID)
    return this.http.get(this.configService.getBaseUrl(), { params : httpParams});
  }

}
