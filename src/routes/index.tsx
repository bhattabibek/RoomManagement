import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

const AppLayout = lazy(() => import('../layouts/AppLayout'));
const RoomManage = lazy(() => import("../pages/RoomManage"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Suspense><AppLayout/></Suspense>,
    children: [
      {
        path: "/rooms/manage",
        element: (
          <Suspense fallback={<>...</>}>
            <RoomManage />
          </Suspense>
        ),
      },
    ]
  }
];
