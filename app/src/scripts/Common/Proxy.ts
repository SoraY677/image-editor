export const createProxy = <
  ITEM,
  OBJECT extends { [key: string | number]: ITEM }
>(
  object: OBJECT,
  setObjectItem: (key: string | number | symbol, item: ITEM) => void,
  updatedCallback: (object: OBJECT) => void
) => {
  return new Proxy(object, {
    set(target, key, value) {
      setObjectItem(key, value);
      updatedCallback(target);
      return true;
    },
    get(target, key) {
      return target[String(key)];
    },
    deleteProperty(target, key) {
      delete target[String(key)];
      updatedCallback(target);
      return true;
    },
  });
};
