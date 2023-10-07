import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// Function to get user role
function getUserRole(): string {
  const roles = JSON.parse(localStorage.getItem('roles') || '[]');
  return roles[0]; // Assuming the roles are stored as an array of strings
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)

  const allowedRoles = route.data['allowedRoles'] as Array<string>;

  // Special handling for login page
  if (route.routeConfig && (route.routeConfig.path === '' || route.routeConfig.path === 'registration' || route.routeConfig.path === 'login')) {
    const userRole = getUserRole();
    
    if (userRole) {
      // User has a role, redirect to home page
      if(userRole === 'ROLE_ADMIN') {
        router.navigate(['/admin/users']);
        return false;
      } else
      router.navigate(['/user/home']);
      return false;
    }
    // User has no role, allow access to login page
    return true;
  }

  // Handling for other pages
  const userRole = getUserRole();
  if (allowedRoles && allowedRoles.includes(userRole)) {
    return true;
  } else {
    // Navigate to a default route if the user doesn't have the necessary permissions
    router.navigate(['']);
    return false;
  }
};
