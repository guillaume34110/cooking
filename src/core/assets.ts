// Utilitaire pour gérer les chemins d'assets avec le base path correct
const getBasePath = (): string => {
  // Vite injecte automatiquement import.meta.env.BASE_URL
  return import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
};

export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  // S'assurer que le path commence par /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

export const getImagePath = (imageName: string): string => {
  return getAssetPath(`/assets/images/${imageName}`);
};

export const getVideoPath = (videoName: string): string => {
  return getAssetPath(`/videos/${videoName}`);
};

export const getSoundPath = (soundName: string): string => {
  return getAssetPath(`/sounds/${soundName}`);
}; 