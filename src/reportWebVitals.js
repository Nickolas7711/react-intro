const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals')
      .then(({
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB,
      }) => Promise.all([
        getCLS(onPerfEntry),
        getFID(onPerfEntry),
        getFCP(onPerfEntry),
        getLCP(onPerfEntry),
        getTTFB(onPerfEntry),
      ]))
      .catch((error) => {
        console.error('Error in web-vitals:', error);
      });
  }
};

export default reportWebVitals;
