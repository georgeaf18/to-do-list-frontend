import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";

const API_URL = environment.API;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllTasks(): Observable<any> {
    return this.http.get(API_URL + "/tasks");
  }

  public getTodaysTasks(userPK): Observable<any> {
    return this.http.get(`${API_URL}/tasks/today/${userPK}`)
  }

  public getOverdueTasks(userPK, completed: boolean): Observable<any> {
    return this.http.get(`${API_URL}/tasks/overdue/${userPK}?completed=${completed}`);
  }

  public getUpcomingTasks(userPK, completed: boolean): Observable<any> {
    return this.http.get(`${API_URL}/tasks/upcoming/userPK?completed=${completed}`)
  }

  public insertTask(data): Observable<any> {
    return this.http.post(API_URL + "/tasks", data);
  }

  public deleteTask(id): Observable<any> {
    return this.http.delete(`${API_URL}/tasks/${id}`);
  }

  public updateTask(id, data): Observable<any> {
    return this.http.put(`${API_URL}/tasks/${id}`, data)
  }
}
