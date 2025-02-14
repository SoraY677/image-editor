export const dispatch = <T>(eventName: string, detail: T) => {
  const event = new CustomEvent<T>(eventName, {
    detail,
  });
  window.dispatchEvent(event);
};

export const receive = <T>(
  eventName: string,
  callback: (e: CustomEvent<T>) => void
) => {
  window.addEventListener(eventName, (e) => {
    const event = e as CustomEvent<T>;
    callback(event);
  });
};
