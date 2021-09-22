import {withQueryParams} from '@codahq/packs-sdk';

export function apiUrl(path: string, params?: Record<string, any>): string {
  const url = `https://app.asana.com/api/1.0${path}`;
  return params ? withQueryParams(url, params) : url;
}