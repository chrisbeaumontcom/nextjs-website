export function itemSlug(name, id) {
  return (
    name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/,/g, "")
      .replace(/:/g, "") +
    "-" +
    id
  );
}

export function readItemSlug(slug) {
  const ar = slug.split("-");
  const tempid = ar[ar.length - 1];
  const id = isNaN(tempid) ? 0 : tempid;
  return id;
}

export function slugToTitle(slug) {
  return slug.replace(/-/g, " ");
}
