import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { Usuario } from '../types/usuario.type';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private currentUserSubject: BehaviorSubject<Usuario>;
    public currentUser: Observable<Usuario>;

    constructor(private readonly http:HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<Usuario> 
    {                        
        return this.http.post<Usuario>(`http://localhost:3100/api/v0/auth/login`, { username, password })
        .pipe(map(usuario => {
            console.log(usuario);
            localStorage.setItem('currentUser', JSON.stringify(usuario));
            this.currentUserSubject.next(usuario);
            return usuario;
        }));       
    } 

    logout() 
    {        
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    testAutenticacion()
    {
        const  headers = new  HttpHeaders().set("Authorization", "Bearer "+ this.currentUserValue.token );
        console.log("current",this.currentUserValue);
        this.http.get<any>("http://localhost:3100/api/v0/auth/jwtAccess",{headers}).subscribe(
            data=> {
                alert(data);
            }, 
            error=> {
                console.log(error);
                alert("Error");
            }
        )
    }
}