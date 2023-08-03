import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import { defineConfig, UserConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { Lib } from './lib';
import { PATHS } from './paths';

export default defineConfig((init: { mode: string; }) => {
  Lib.loadViteEnv(init.mode);
  const DEV = init.mode === 'development';

  return {
    root: PATHS.PROJECT_ROOT,
    publicDir: 'static',
    base: process.env.VITE_APP_BASE_URL,

    resolve: {
      alias: Lib.makeAliases(),
    },

    test: {
      environment: 'happy-dom',
      include: ['./src/**/*.spec.ts'],
      reporters: ['default', 'html'],
    },

    server: {
      port: Number(process.env.VITE_SERVER_PORT),
      host: process.env.VITE_SERVER_HOST,
    }, 

    build: {
      target: 'es2021',
      minify: process.env.VITE_BUILD_USE_MINIFY === 'true',
      assetsDir: 'app',
      
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          
          manualChunks(chunkPath: string) {
            if (chunkPath.includes('node_modules/')) {
              return 'vendors';
            }
          },
        },
      },
    },

    plugins: [
      vue(),

      eslint({
        exclude: ['/node_modules/', '/dist/'],
        failOnError: !DEV,
        failOnWarning: !DEV,
      }),

      checker({ vueTsc: process.env.VITE_SERVER_USE_VUE_TSC === 'true' }),

      createHtmlPlugin({
        minify: process.env.VITE_BUILD_USE_MINIFY === 'true',

        inject: {
          data: {
            title: process.env.VITE_APP_TITLE,

            injectScript: {
              appIndexEntry: `<script type="module" src="${PATHS.APP_INDEX_ENTRY}"></script>`,
            },
          },
        },
      }),
    ],
  } as UserConfig;
});
