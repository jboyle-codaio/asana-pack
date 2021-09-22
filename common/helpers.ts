import {
  ExecutionContext,
  FetchRequest,
  SyncExecutionContext,
  SyncFormulaResult,
  withQueryParams
} from '@codahq/packs-sdk';
import {Resource} from "./types";

export const PAGE_SIZE = 10;

export function apiUrl(path: string, params?: Record<string, any>): string {
  const url = `https://app.asana.com/api/1.0${path}`;
  return params ? withQueryParams(url, params) : url;
}

export function deleteNullProps<T>(obj: T): T {
  for (const [k, v] of Object.entries(obj)) {
    if (v === null) {
      delete obj[k];
    }
  }
  return obj;
}

export async function fetchPaginatedResources(context: SyncExecutionContext, urlPath: string, queryParams: Record<string, any>): Promise<SyncFormulaResult<object>> {
  let continuation = context.sync.continuation;
  const params: Record<string, any> = {
    ...queryParams,
    limit: PAGE_SIZE,
    offset: continuation?.offset,
  };
  const request: FetchRequest = {
    method: 'GET',
    url: apiUrl(urlPath, params),
  };
  const result = await context.fetcher.fetch(request);
  const resources = result.body.data.map(resource => deleteNullProps(resource)) as Resource[];
  const offset = result.body.next_page?.offset;
  return {
    result: resources,
    continuation: offset ? { offset } : null,
  };
}

export async function runAction(context: ExecutionContext, urlPath: string, data: Record<string, any>) {
  const request: FetchRequest = {
    method: 'POST',
    url: apiUrl(urlPath),
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  };
  const result = await context.fetcher.fetch(request);
  return deleteNullProps(result.body.data) as Resource;
}