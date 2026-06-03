export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

export function routerBasename() {
  const baseUrl = import.meta.env.BASE_URL;

  if (!baseUrl || baseUrl === '/' || baseUrl === './') {
    return undefined;
  }

  return baseUrl.replace(/\/$/, '');
}
