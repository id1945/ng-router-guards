##### …create new project
```
ng new ng-router-guards
cd ng-router-guards
npm install
npm start
```
##### …use code available
```
git clone https://github.com/id1945/ng-router-guards.git
cd ng-router-guards
npm install
npm start
```
##### http://localhost:4200

##### …working with github
```
git remote add origin https://github.com/id1945/ng-router-guards.git
git remote set-url origin https://github.com/id1945/ng-router-guards.git
git commit -m "first commit"
git push -u origin master
```

##### Summary

```javascript
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
          path: '',
          canActivateChild: [AuthGuardService],
          children: [
              { path: 'user', component: AdminComponent },
              { path: 'role', component: AdminComponent }
          ]
      }
  ]
  }
];
```

```javascript
@NgModule({
  declarations: [
    ...
  ],
  imports: [,
    ...
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [...]
})
export class AppModule { }
```

```javascript
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.authenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.authenticatedChild();
  }
}
```

```javascript
export class AuthService {

  constructor() { }

  public authenticated(): boolean {
    return true;
    // return false;
  }

  public authenticatedChild(): boolean {
    return true;
    // return false;
  }
}
```