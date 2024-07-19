import React, { useEffect } from 'react';

function Baby() {
  useEffect(() => {
    window.location.href = 'https://www.macys.com/shop/kids-clothes?id=5991&cm_sp=intl_hdr-_-kids-%26-baby-_-5991-_-kids-%26-baby';
  }, []);

  return null; 
}

export default Baby;
