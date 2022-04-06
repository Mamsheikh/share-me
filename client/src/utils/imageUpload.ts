export const imageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  formData.append('upload_preset', 'prismagram');
  formData.append('cloud_name', 'mamsheikh');

  const res = await fetch(`https://api.cloudinary.com/v1_1/mamsheikh/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  return { public_id: data.public_id, url: data.secure_url };
  // }
};

export const checkImage = (file) => {
  let err = '';
  if (!file) return (err = 'File does not exist');

  //   if (file.size > 1024 * 1024) return (err = 'File must be less than 1mb');

  if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
    return (err = 'Invalid image format');
  }

  return err;
};
