import * as geojson from 'geojson';
import * as superjson from 'superjson';
import * as _trpc_server from '@trpc/server';
import * as fastify_types_type_provider from 'fastify/types/type-provider';
import * as http from 'http';
import * as fastify from 'fastify';

interface User {
    name: string[] | string;
}

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: {
        req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
        res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
        user: User;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: typeof superjson.default;
}>, {
    api: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
            res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            user: User;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
    }>, {
        version: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                    user: User;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                user: User;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            version: string;
        }>;
        hello: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                    user: User;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                user: User;
            };
            _input_in: {
                username?: string | null | undefined;
            } | null | undefined;
            _input_out: {
                username?: string | null | undefined;
            } | null | undefined;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            text: string;
        }>;
        echo: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                    user: User;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                user: User;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, undefined>;
    }>;
    places: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
            res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            user: User;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
    }>, {
        allPlaces: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                    user: User;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                user: User;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, geojson.FeatureCollection<geojson.Geometry, geojson.GeoJsonProperties>>;
    }>;
}>;
type AppRouter = typeof appRouter;

export { AppRouter };
