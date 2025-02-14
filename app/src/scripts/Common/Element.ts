export const getElementById = <T extends HTMLElement>(id: string) => {
  const element = document.getElementById(id);
  if (!element) throw `id:${id} element not found`;
  return element as T;
};
