import * as path from 'path';

const PATHS: Record<string, string> = {};
PATHS.PROJECT_ROOT = path.resolve('./');
PATHS.APP_ENVIRONMENT = `${PATHS.PROJECT_ROOT}/environment`;
PATHS.APP_SOURCE = `${PATHS.PROJECT_ROOT}/src`;
PATHS.APP_INDEX_ENTRY = './src/app/main.ts';

export { PATHS };
