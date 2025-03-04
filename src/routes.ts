import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout('layouts/index.tsx', [
        index('pages/home/index.tsx'),
        route('/about','pages/about/index.tsx'),
    ]),
] satisfies RouteConfig;
