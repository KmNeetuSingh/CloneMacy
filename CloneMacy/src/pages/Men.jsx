// Men.js
import React, { useEffect } from 'react';

function Men() {
  useEffect(() => {
    window.location.href = 'https://www.macys.com/shop/mens-clothing?id=1&cm_sp=intl_hdr-_-men-_-1-_-men';
  }, []);

  return null; // Optionally, render a loading indicator or message here
}

export default Men;
