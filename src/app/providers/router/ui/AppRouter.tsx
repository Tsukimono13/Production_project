import React, {
    Suspense, memo, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { AppRouters, AppRoutersProps, routeConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { getUserData } from 'entities/User';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutersProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
