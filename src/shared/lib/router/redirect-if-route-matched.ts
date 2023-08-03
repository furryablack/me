import { Shared } from '@shared';

/**
 * Make a route unaccessable to navigate
 * 
 * Route's children will be available to navigate yet
 * 
 * If unaccessable route matched will try to navigate to back
 * 
 * If back route is initial route (vue-router.START_LOCATION) 
 * will try to navigate to VITE_APP_BASE_URL
 * 
 * @param route - unaccessable route 
 * @returns RouteRecordRedirectOption function like (to: RouteLocation) => RouteLocationRaw 
 */
export function redirectIfRouteMatched(unaccessableRoute: string) {
  const LibRouter = Shared.Lib.Router;
  const LibEnvironment = Shared.Lib.Environment;
  const { VITE_APP_BASE_URL } = LibEnvironment.getParsed();

  return () => {
    const initalRoute = LibRouter.getInitialRoute();

    const redirectPath = initalRoute.path === unaccessableRoute
      ? VITE_APP_BASE_URL
      : initalRoute.path;

    return redirectPath;
  };
}