const customViewports = {
  iphone5: {
    name: 'iPhone SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iphone8: {
    name: 'iPhone 8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iphone8Plus: {
    name: 'iPhone 8 Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'superdda',
    values: [
        { 
            name: 'superdda', 
            value: '#fed487'
        },
        { 
            name: 'white', 
            value: '#fff' 
        },
        { 
          name: 'dark', 
          value: '#333' 
      },
      ],
  },
  viewport: {
    viewports: {
     ...customViewports,
   },
    defaultViewport: 'iphone8Plus'
  },
  controls: { expanded: true },
};
  