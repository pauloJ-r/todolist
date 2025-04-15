import { Routes as ReactRouterRoutes, Route } from "react-router";
import { Home } from "../../pages";

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/" />
            <Route index element={<Home />} />
        </ReactRouterRoutes>
    );
}