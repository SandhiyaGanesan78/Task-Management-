import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "src/app/services/app.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AppService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.authService.getToken();

    if (userToken) {
      const clonedRequest = req.clone({
        setHeaders: {   
          Authorization: `Bearer ${userToken}`
        }
      });

      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}