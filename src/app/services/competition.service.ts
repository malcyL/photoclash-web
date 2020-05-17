import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICompetitionHttp } from '../models/http-models/competition-http.interface';

@Injectable()
export class CompetitionService {
  competitonsUrl = `${environment.apiUrl}competitions`;

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<ICompetitionHttp> {
    return this.http.get<ICompetitionHttp>(this.competitonsUrl);
  }

  createCompetition(title): Observable<ICompetitionHttp> {
    const body = { title };
    return this.http.post<any>(this.competitonsUrl, body);
  }
}
