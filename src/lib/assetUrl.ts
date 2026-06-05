export function assetUrl(path: string) {
  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, '');
  const baseUrl = normalizeBaseUrl(import.meta.env.BASE_URL);

  return `${baseUrl}${cleanPath}`;
}

export function routerBasename() {
  const baseUrl = import.meta.env.BASE_URL;

  if (!baseUrl || baseUrl === '/' || baseUrl === './') {
    return undefined;
  }

  const cleanBaseUrl = baseUrl.replace(/^\/+|\/+$/g, '');

  return cleanBaseUrl ? `/${cleanBaseUrl}` : undefined;
}

function normalizeBaseUrl(baseUrl: string) {
  if (!baseUrl || baseUrl === './') {
    return '/';
  }

  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}
