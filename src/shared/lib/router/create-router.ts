import { createRouter as createRouterNative, createWebHistory, RouteRecordRaw } from 'vue-router';

export function createRouter(route: RouteRecordRaw, baseUrl: string) {
  return createRouterNative({
    history: createWebHistory(baseUrl),
    routes: [route],
  });
}