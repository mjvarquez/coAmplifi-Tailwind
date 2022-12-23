import { Component } from '@angular/core';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    /**
     * Constructor
     */
    constructor()
    {
        // localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sdW5jaC1idWRkaWVzLWJhY2tlbmQuamFucmV5Z3JvdXAuc2l0ZVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MTI1ODQxNiwiZXhwIjoxNjcxMjYyMDE2LCJuYmYiOjE2NzEyNTg0MTYsImp0aSI6ImdxazdkTk8zaXdtMWtzaXoiLCJzdWIiOjEyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.SFdTi6jMqfMKKLCaMjcugs_8LwSnbXVh0tobb4EeCXE")
    }
}
