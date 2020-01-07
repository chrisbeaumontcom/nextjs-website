import Prismic from 'prismic-javascript';

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://webschool1.cdn.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = '';

// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export const linkResolver = doc => {
  // console.log(doc);
  if (doc.link_type === 'Document') {
    if (doc.type === 'artwork') {
      return `/detail/${doc.slug}`;
    }
    if (doc.type === 'gallerypage') {
      return `/gallery/${doc.slug}`;
    }
  }
  if (doc.link_type === 'Web') {
    return doc.url;
  }
  return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = doc => {
  if (doc.link_type === 'Document') {
    if (doc.type === 'artwork') {
      return `/detail?id=${doc.slug}`;
    }
    if (doc.type === 'gallerypage') {
      return `/gallery?id=${doc.slug}`;
    }
  }
  if (doc.link_type === 'Web') {
    return doc.url;
  }
  return '/';
};

// -- Client method to query Prismic
// Avoids reinitializing an API connection for every query, handling instead with a Client object
let frontClient;

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient;
  // Prevents generating new instances for client side since we don't need the refreshed request object.
  else {
    // Reinitializes Client only if there's a req object present, which is used for Previews
    const options = Object.assign({}, req ? { req } : {}, accessToken ? { accessToken: accessToken } : {});
    // Connects to the given repository to facilitate data queries
    return Prismic.client(apiEndpoint, options);
  }
};
