import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICompetitionHttp, ICompetitionListHttp } from '../models/http-models/competition-http.interface';

@Injectable()
export class CompetitionService {
  competitonsUrl = `${environment.apiUrl}competitions`;

  constructor(private http: HttpClient) { }

  getCompetition(id): Observable<ICompetitionHttp> {
    return this.http.get<ICompetitionHttp>(`${this.competitonsUrl}/${id}`);
  }

  getCompetitions(): Observable<ICompetitionListHttp> {
    return this.http.get<ICompetitionListHttp>(this.competitonsUrl);
  }

  createCompetition(title): Observable<ICompetitionListHttp> {
    const body = { title };
    return this.http.post<any>(this.competitonsUrl, body);
  }
}
