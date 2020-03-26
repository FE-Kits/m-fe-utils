import uuid from 'uuid/v4';

export function genId() {
  return uuid();
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
export function hash(str: string) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
  return hash >>> 0;
}

export function parseJson(str: string, defaultValue = {}) {
  try {
    return JSON.parse(str) || defaultValue;
  } catch (e) {
    return defaultValue;
  }
}
