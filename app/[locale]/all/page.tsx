// GalleryServer.tsx
import React from 'react';

import { fetchPhotos } from '@/utils/actions';
import GalleryClient from './LightGallery';

const GalleryServer = async () => {
  const photos = await fetchPhotos(); 
  
  
  return <GalleryClient photos={photos} />;
};

export default GalleryServer;
