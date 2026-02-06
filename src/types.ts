export interface ServiceItem {
  name: string;
  price: string;
  description: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface AIEditState {
  originalImage: string | null;
  generatedImage: string | null;
  isGenerating: boolean;
  prompt: string;
  error: string | null;
}