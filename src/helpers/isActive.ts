export const isActive = (menuKey: string, pathname: string) => {
  const [menuPath, menuQuery] = menuKey.split("?");

  if (pathname !== menuPath && !pathname.startsWith(`${menuPath}/`)) {
    return false;
  }

  if (!menuQuery) return true;

  if (typeof window === "undefined") return false;

  const currentParams = new URLSearchParams(window.location.search);
  const menuParams = new URLSearchParams(menuQuery);

  for (const [key, value] of menuParams.entries()) {
    if (currentParams.get(key) !== value) {
      return false;
    }
  }

  return true;
};
