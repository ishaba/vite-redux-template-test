/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DrinkIdImport } from './routes/$drinkId'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const DrinkIdRoute = DrinkIdImport.update({
  id: '/$drinkId',
  path: '/$drinkId',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$drinkId': {
      id: '/$drinkId'
      path: '/$drinkId'
      fullPath: '/$drinkId'
      preLoaderRoute: typeof DrinkIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$drinkId': typeof DrinkIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$drinkId': typeof DrinkIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$drinkId': typeof DrinkIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$drinkId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$drinkId'
  id: '__root__' | '/' | '/$drinkId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DrinkIdRoute: typeof DrinkIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DrinkIdRoute: DrinkIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$drinkId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$drinkId": {
      "filePath": "$drinkId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
