import qs from 'query-string';

import { ENDPOINT_BASE_URL, ENDPOINT_PATH } from '@/constants/endpoints';

import { APIError } from '@/lib/error';
import template from '@/lib/string/template';

export async function getAssetsHistory(id: string, opts = { interval: 'd1' }) {
  const _opts = opts ?? { interval: 'd1' };
  const params = qs.stringify(_opts);

  const requestURL = `${ENDPOINT_BASE_URL}${template(ENDPOINT_PATH.GET_HISTORY, { id })}?${params}`;
  const http = await fetch(requestURL, {
    method: 'GET',
  });

  const json = await http.json();
  if (!json && http.status >= 400 && http.status < 500) {
    throw new Error(`[${http.status}] ${http.statusText}`);
  } else if (http.status >= 400) {
    throw new APIError(`[${http.status}] ${http.statusText}`, json);
  }
  return json;
}
