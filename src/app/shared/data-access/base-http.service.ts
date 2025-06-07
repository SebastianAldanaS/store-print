import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class BaseHttpService {

    http = inject(HttpClient);
    apiUrl = environment.API_URL;
    
}