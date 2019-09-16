export function itemSlug(name, id) {
  return (
    name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/,/g, '')
      .replace(/:/g, '') +
    '-' +
    id
  );
}

export function readItemSlug(slug) {
  const ar = slug.split('-');
  const tempid = ar[ar.length - 1];
  const id = isNaN(tempid) ? 0 : tempid;
  return id;
}

export function slugToTitle(slug) {
  return slug.replace(/-/g, ' ');
}

// export function getGalleries() {
//   const galleries = [
//     {
//       name: 'Selected Paintings',
//       slug: 'selected-paintings'
//     },
//     { name: 'Still Life with Variations', slug: 'still-life-with-variations' },
//     { name: 'Available Prints', slug: 'available-prints' }
//   ];
//   return galleries;
// }

export function getGalleryName(slug, galleries) {
  let name = '';
  galleries.forEach(el => {
    if (slug == el.slug) {
      name = el.name;
    }
  });
  return name;
}
