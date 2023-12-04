import * as geojson from 'geojson';
import * as superjson from 'superjson';
import * as _trpc_server from '@trpc/server';
import * as fastify_types_type_provider from 'fastify/types/type-provider';
import * as http from 'http';
import * as fastify from 'fastify';

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: {
        req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
        res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: typeof superjson.default;
}>, {
    api: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
            res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
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
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
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
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
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
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
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
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, geojson.FeatureCollection<geojson.Geometry, geojson.GeoJsonProperties>>;
        cafes: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, geojson.FeatureCollection<geojson.Geometry, geojson.GeoJsonProperties>>;
        restaurants: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, geojson.FeatureCollection<geojson.Geometry, geojson.GeoJsonProperties>>;
        bars: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, geojson.FeatureCollection<geojson.Geometry, geojson.GeoJsonProperties>>;
        parks: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, geojson.FeatureCollection<geojson.Geometry, geojson.GeoJsonProperties>>;
        onePlace: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: string;
            _input_out: string;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            name: string | undefined;
            address: string | undefined;
            type: string | undefined;
            rating: string | undefined;
            photo: string | undefined;
        }>;
    }>;
    user: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
            res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
    }>, {
        getAll: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            id: string;
            email: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[]>;
        getOne: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: {
                id: string;
            };
            _input_out: {
                id: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            id: string;
            email: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null>;
        createUser: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                    res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: fastify.FastifyRequest<fastify.RouteGenericInterface, fastify.RawServerDefault, http.IncomingMessage, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown, fastify.FastifyBaseLogger, fastify_types_type_provider.ResolveFastifyRequestType<fastify.FastifyTypeProviderDefault, fastify.FastifySchema, fastify.RouteGenericInterface>>;
                res: fastify.FastifyReply<fastify.RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, fastify.RouteGenericInterface, unknown, fastify.FastifySchema, fastify.FastifyTypeProviderDefault, unknown>;
            };
            _input_in: {
                name: string;
                id: string;
                email: string;
            };
            _input_out: {
                name: string;
                id: string;
                email: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            id: string;
            email: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
        }>;
    }>;
}>;
type AppRouter = typeof appRouter;

export { AppRouter };
