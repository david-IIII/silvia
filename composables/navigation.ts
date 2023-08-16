export function useNavigationMenu() {
  const navigationMenu = () => {
    return [
      {
        label: "menu_home",
        to: "/",
      },
      {
        label: "menu_escult",
        to: "/sculture",
      },
      {
        label: "menu_pint",
        to: "/draw",
      },
      {
        label: "menu_artista",
        to: "/artist",
      },
      {
        label: "menu_contacte",
        to: "/contact",
      },
    ];
  };

  return { navigationMenu };
}
