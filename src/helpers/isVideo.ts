export const isVideo = (url: string): boolean => {
  return url.endsWith(".mp4") || url.endsWith(".mov") || url.endsWith(".webm");
};
