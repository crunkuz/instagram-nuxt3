/**
 * ---------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------
 * */

import type { NavigationFailure, RouteLocation, RouteLocationNormalizedLoaded, RouteLocationOptions, RouteQueryAndHash } from 'vue-router'
import type { TypedRouteList } from './__routes'

export type RouteListDecl = {
  user: 'user'
  '': { pId: '_-p-id'; storiesId: '_-stories-id' }
  directInbox: 'direct-inbox'
  error404: 'error-404'
  explore: { pId: 'explore-p-id' }
  index: 'index'
  login: 'login'
  moment: 'moment'
  pPostId: 'p-postId'
  reels: 'reels'
  spline: 'spline'
  storiesUserStoryId: 'stories-user-storyId'
  storiesUser: 'stories-user'
  swiper: 'swiper'
}

export type TypedRouteParams = {
  user: {
    user: string | number
  }
  '_-p-id': {
    id: string | number
  }
  '_-stories-id': {
    id: string | number
  }
  'direct-inbox': never
  'error-404': never
  'explore-p-id': {
    id: string | number
  }
  index: never
  login: never
  moment: never
  'p-postId': {
    postId: string | number
  }
  reels: never
  spline: never
  'stories-user-storyId': {
    user: string | number
  }
  'stories-user': {
    user: string | number
  }
  swiper: never
}

type TypedRouteParamsStructure = {
  [K in TypedRouteList]: Record<string, string | number> | never
}

type TypedLocationAsRelativeRaw<T extends TypedRouteList> = {
  name?: T
  params?: TypedRouteParams[T]
}

type TypedRouteLocationRaw<T extends TypedRouteList> = RouteQueryAndHash & TypedLocationAsRelativeRaw<T> & RouteLocationOptions

export interface TypedRouter {
  /**
   * Remove an existing route by its name.
   *
   * @param name - Name of the route to remove
   */
  removeRoute(name: TypedRouteList): void
  /**
   * Checks if a route with a given name exists
   *
   * @param name - Name of the route to check
   */
  hasRoute(name: TypedRouteList): boolean
  /**
   * Returns the {@link RouteLocation | normalized version} of a
   * {@link RouteLocationRaw | route location}. Also includes an `href` property
   * that includes any existing `base`. By default the `currentLocation` used is
   * `route.currentRoute` and should only be overriden in advanced use cases.
   *
   * @param to - Raw route location to resolve
   * @param currentLocation - Optional current location to resolve against
   */
  resolve<T extends TypedRouteList>(
    to: TypedRouteLocationRaw<T>,
    currentLocation?: RouteLocationNormalizedLoaded
  ): RouteLocation & {
    href: string
  }
  /**
   * Programmatically navigate to a new URL by pushing an entry in the history
   * stack.
   *
   * @param to - Route location to navigate to
   */
  push<T extends TypedRouteList>(to: TypedRouteLocationRaw<T>): Promise<NavigationFailure | void | undefined>
  /**
   * Programmatically navigate to a new URL by replacing the current entry in
   * the history stack.
   *
   * @param to - Route location to navigate to
   */
  replace<T extends TypedRouteList>(to: TypedRouteLocationRaw<T>): Promise<NavigationFailure | void | undefined>
}

declare module 'nuxt/dist/app/nuxt' {
  export interface NuxtApp {
    $typedRouter: TypedRouter
    $routesList: RouteListDecl
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $typedRouter: TypedRouter
    $routesList: RouteListDecl
  }
}
