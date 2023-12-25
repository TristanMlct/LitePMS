import { getData } from '$lib/server/database.js';

export async function load() {
  let properties = null;

  await getData('properties', (data) => {
    properties = data;
  });

  return {properties};
}