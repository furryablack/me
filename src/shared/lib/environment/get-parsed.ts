function parseEnvVariable(variable: string) {
  try {
    return JSON.parse(variable);
  } catch(err) {
    return variable.toString();
  }
}

export function getParsed() {
  return Object.entries(import.meta.env)
    .reduce((env, [key, variable]) => ({
      ...env,
      [key]: parseEnvVariable(variable),
  }), {} as ImportMetaEnv);
}