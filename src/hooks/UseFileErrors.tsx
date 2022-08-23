export const validateImage = (image: File) => {
  if (image.name.length > 100) {
    return 'Image name should have maximum 100 characters';
  }
  if (image.type != 'image/png' && image.type != 'image/jpg' && image.type != 'image/jpeg') {
    return 'Image should be .png/.jpg/.jpeg';
  }
  if (image.size > 5242880) {
    return 'Image should have less than 5MB';
  }

  return '';
};
