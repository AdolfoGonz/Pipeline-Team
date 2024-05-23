"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COGNITO_SECRET_CLIENT = exports.COGNITO_CLIENT_ID = exports.COGNITO_POOL_ID = exports.AWS_SESSION_TOKEN = exports.AWS_SECRET_ACCESS_KEY = exports.AWS_ACCESS_KEY_ID = exports.AWS_REGION = exports.PREFIX_NAME = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.NODE_ENV = exports.PORT = void 0;
exports.PORT = process.env.PORT ? parseInt(process.env.PORT) : 8085;
exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.DB_NAME = process.env.DB_NAME || 'projectjs';
exports.DB_USER = process.env.DB_USER || 'admin';
exports.DB_PASSWORD = process.env.DB_PASSWORD || '';
exports.DB_HOST = process.env.DB_HOST || 'localhost';
exports.PREFIX_NAME = exports.NODE_ENV === 'production' ? '' : '-DEV';
exports.AWS_REGION = process.env.AWS_REGION || 'us-east-1';
exports.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
exports.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
exports.AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN || '';
exports.COGNITO_POOL_ID = process.env.COGNITO_POOL_ID || '';
exports.COGNITO_CLIENT_ID = process.env.COGNITO_CLIENT_ID || '';
exports.COGNITO_SECRET_CLIENT = process.env.COGNITO_SECRET_CLIENT || '';
