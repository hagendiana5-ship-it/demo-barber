import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Edits an image based on a text prompt using Gemini 2.5 Flash Image.
 * @param base64Image The base64 encoded string of the source image.
 * @param mimeType The mime type of the source image (e.g., 'image/jpeg').
 * @param prompt The text prompt describing the desired edit.
 * @returns The base64 data URL of the generated image or null if failed.
 */
export const editImageWithGemini = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: `Edit this image: ${prompt}`,
          },
        ],
      },
    });

    if (!response.candidates || response.candidates.length === 0) {
      throw new Error("No candidates returned");
    }

    const content = response.candidates[0].content;
    if (!content || !content.parts) {
      throw new Error("No content parts found");
    }

    // Iterate through parts to find the image part
    for (const part of content.parts) {
      if (part.inlineData && part.inlineData.data) {
        const generatedMime = part.inlineData.mimeType || 'image/png';
        return `data:${generatedMime};base64,${part.inlineData.data}`;
      }
    }

    // Fallback: Check if there is text and maybe it refused?
    const textPart = content.parts.find(p => p.text);
    if (textPart) {
      console.warn("Model returned text instead of image:", textPart.text);
      throw new Error(textPart.text || "Model did not generate an image.");
    }

    return null;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};