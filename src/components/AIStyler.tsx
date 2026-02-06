import React, { useState, useRef } from 'react';
import { Upload, Wand2, RefreshCw, AlertCircle, Scissors } from 'lucide-react';
import Button from './Button';
import { AIEditState } from '../types';
import { editImageWithGemini } from '../services/gemini';
import { useLanguage } from '../context/LanguageContext';

const AIStyler: React.FC = () => {
  const { t } = useLanguage();
  const [state, setState] = useState<AIEditState>({
    originalImage: null,
    generatedImage: null,
    isGenerating: false,
    prompt: '',
    error: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(prev => ({
          ...prev,
          originalImage: reader.result as string,
          generatedImage: null,
          error: null
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!state.originalImage || !state.prompt) return;

    setState(prev => ({ ...prev, isGenerating: true, error: null }));

    try {
      // Extract base64 data and mime type
      const response = await fetch(state.originalImage);
      const blob = await response.blob();
      const base64Data = state.originalImage.split(',')[1];
      
      const result = await editImageWithGemini(base64Data, blob.type, state.prompt);
      
      if (result) {
        setState(prev => ({ ...prev, generatedImage: result, isGenerating: false }));
      } else {
        throw new Error(t.aiStyler.failed);
      }
    } catch (err: any) {
        let errorMessage = t.aiStyler.error;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
      setState(prev => ({ ...prev, error: errorMessage, isGenerating: false }));
    }
  };

  return (
    <section id="ai-styler" className="py-24 bg-stone-900 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-gold-400">AI</span> {t.aiStyler.title}
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {t.aiStyler.description}
          </p>
        </div>

        <div className="glass-panel p-8 rounded-xl max-w-5xl mx-auto shadow-2xl bg-stone-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div 
                className={`border-2 border-dashed rounded-lg h-64 flex flex-col items-center justify-center cursor-pointer transition-colors ${state.originalImage ? 'border-gold-500/50 bg-stone-950/50' : 'border-stone-700 hover:border-gold-400 hover:bg-stone-800'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                {state.originalImage ? (
                  <img 
                    src={state.originalImage} 
                    alt="Original" 
                    className="h-full w-full object-contain rounded-lg p-2"
                  />
                ) : (
                  <div className="text-center p-6">
                    <Upload className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                    <p className="text-stone-300 font-medium">{t.aiStyler.upload}</p>
                    <p className="text-stone-500 text-sm mt-2">{t.aiStyler.uploadHint}</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-gold-500">
                  {t.aiStyler.promptLabel}
                </label>
                <textarea
                  className="w-full bg-stone-950 border border-stone-700 rounded-md p-4 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none resize-none transition-all"
                  rows={3}
                  placeholder={t.aiStyler.promptPlaceholder}
                  value={state.prompt}
                  onChange={(e) => setState(prev => ({ ...prev, prompt: e.target.value }))}
                />
                
                {state.error && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-3 rounded-md text-sm border border-red-900/50">
                    <AlertCircle size={16} />
                    {state.error}
                  </div>
                )}

                <Button 
                  fullWidth 
                  onClick={handleGenerate} 
                  disabled={!state.originalImage || !state.prompt || state.isGenerating}
                  className={!state.originalImage || !state.prompt || state.isGenerating ? 'opacity-50 cursor-not-allowed grayscale' : ''}
                >
                  {state.isGenerating ? (
                    <>
                      <RefreshCw className="animate-spin w-4 h-4" /> {t.aiStyler.processing}
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" /> {t.aiStyler.generate}
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Output Section */}
            <div className="border border-stone-700 bg-stone-950/50 rounded-lg flex items-center justify-center min-h-[400px] relative overflow-hidden group">
              {state.generatedImage ? (
                <>
                  <img 
                    src={state.generatedImage} 
                    alt="Generated Style" 
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                  <a 
                    href={state.generatedImage} 
                    download="blade-pixel-style.png"
                    className="absolute bottom-4 right-4 bg-stone-900/80 p-2 rounded-full text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                  >
                    <Upload className="w-5 h-5 rotate-180" />
                  </a>
                </>
              ) : (
                <div className="text-center p-8 opacity-40">
                  {state.isGenerating ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 border-4 border-gold-400 border-t-transparent rounded-full animate-spin" />
                      <p className="text-gold-200 animate-pulse">{t.aiStyler.consulting}</p>
                    </div>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scissors className="w-8 h-8 text-stone-600" />
                      </div>
                      <p className="text-stone-500 uppercase tracking-widest text-sm">{t.aiStyler.resultPlaceholder}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStyler;