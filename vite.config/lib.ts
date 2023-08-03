/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import { loadEnv as loadEnvNative } from 'vite';
import { PATHS } from './paths';

function makeAliases() {
  const getSubDirs = (folder: string) => {
    return fs.readdirSync(folder).filter(
      (name) => fs.lstatSync(path.join(folder, name)).isDirectory(),
    );
  }

  return getSubDirs(PATHS.APP_SOURCE).reduce(
    (acc: any, name: any) => ({
      ...acc,
      [`@${name}`]: `${PATHS.APP_SOURCE}/${name}`,
    }), {},
  );
}

function loadViteEnv(mode: string): void {
  process.env = {
    ...process.env,

    ...Object.entries(loadEnvNative(mode, PATHS.APP_ENVIRONMENT)).reduce((env, [key, value]) => ({
      ...env,
      [key]: value,
    }), {}),
  };
}

export const Lib = {
  loadViteEnv,
  makeAliases,
};
