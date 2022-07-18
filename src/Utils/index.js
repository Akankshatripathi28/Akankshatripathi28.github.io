export const filterContent = (items) => items.filter((item) => item);

export const classNames = (...names) => filterContent(names).join(" ");
