export const handleSetSessionData = <T>(key: string, value: T) => {
  if (!key || !value) {
    throw new Error("Both key and value are required");
  }
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const handleGetSessionData = <T>(key: string): T | null => {
  const data = sessionStorage.getItem(key);
  if (data === null) return null;

  try {
    return JSON.parse(data) as T;
  } catch (error) {
    console.error("Error parsing session data:", error);
    return null;
  }
};
