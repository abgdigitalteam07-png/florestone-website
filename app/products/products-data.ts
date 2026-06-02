// Shared product data — no 'use client', importable from server and client

export type Product = {
  id: string;
  name: string;
  series: string;
  category: string;
  size: string;
  type: string;
  image: string;
  ada?: boolean;
};

export const ALL_PRODUCTS: Product[] = [
  // S Series
  { id: 'SR-3232', name: 'Saflor® Recess 32×32', series: 'S Series', category: 'Shower Bases', size: '32×32', type: 'Single-threshold recess', image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg' },
  { id: 'SR-3636', name: 'Saflor® Recess 36×36', series: 'S Series', category: 'Shower Bases', size: '36×36', type: 'Single-threshold recess', image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg' },
  { id: 'SR-3648', name: 'Saflor® Recess 36×48', series: 'S Series', category: 'Shower Bases', size: '36×48', type: 'Single-threshold recess', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
  { id: 'SR-3660', name: 'Saflor® Recess 36×60', series: 'S Series', category: 'Shower Bases', size: '36×60', type: 'Single-threshold recess', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg' },
  { id: 'SR-CORNER', name: 'Saflor® Corner Recess', series: 'S Series', category: 'Shower Bases', size: 'Multiple', type: 'Two-wall corner', image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg' },
  { id: 'SR-NEO', name: 'Saflor® NEO Angle', series: 'S Series', category: 'Shower Bases', size: 'Multiple', type: 'NEO angle corner', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
  // F Series
  { id: 'F-3636', name: 'F Series 36×36 Base', series: 'F Series', category: 'Shower Bases', size: '36×36', type: 'Shower base', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3260f-wht-deco.jpg' },
  { id: 'F-4242', name: 'F Series 42×42 Base', series: 'F Series', category: 'Shower Bases', size: '42×42', type: 'Shower base', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg' },
  { id: 'F-EDGE', name: 'F Series w/ The Edge™', series: 'F Series', category: 'Shower Bases', size: 'Multiple', type: 'Premium edge base', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4842f-wht-deco.jpg' },
  { id: '6032TS', name: 'Model 6032TS Tub-Shower', series: 'F Series', category: 'Shower Stalls', size: '60×32', type: '3-Wall tub-shower unit', image: '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg' },
  { id: '6034TS', name: 'Model 6034TS Tub-Shower', series: 'F Series', category: 'Shower Stalls', size: '60×34', type: '3-Wall tub-shower unit', image: '/images/multi-brand/jpeg/florestone-6033hst-unit-deco.jpg' },
  { id: 'F-3PC-NEO', name: '3-PC NEO Corner Walls', series: 'F Series', category: 'Shower Walls', size: 'Multiple', type: '3-piece wall system', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-38f-neo-wht-deco.jpg' },
  { id: 'F-6042', name: 'F Series 60×42 Base', series: 'F Series', category: 'Shower Bases', size: '60×42', type: 'Shower base', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg' },
  // T Series
  { id: 'T-100', name: 'T Series Model 100 Bases', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Standard T Series · Multiple sizes', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-deco.jpg' },
  { id: 'T-200', name: 'T Series Model 200 Recess', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Recess terrazzo', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg' },
  { id: 'T-300', name: 'T Series Model 300 Corner', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Two-wall corner', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-300-3434-deco.jpg' },
  { id: 'T-350', name: 'T Series Model 350 NEO', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'NEO angle corner', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-deco.jpg' },
  { id: 'T-400', name: 'T Series Model 400 Barrier-Free', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Roll-In · ADA & ANSI A117.1', image: '/images/bases/terrazzo/jpg/florestone-model-400-6333-deco.jpg', ada: true },
  { id: 'T-500', name: 'T Series Model 500 Barrier-Free', series: 'T Series', category: 'Shower Bases', size: '36×36', type: 'Transfer · ADA compliant', image: '/images/bases/terrazzo/jpg/florestone-model-500-4248-deco.jpg', ada: true },
  // Barrier-Free
  { id: '4040F-BF', name: 'Model 4040F Fiberglass BF', series: 'F Series', category: 'Barrier-Free', size: '40×40', type: 'Molded fiberglass curbless ADA', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg', ada: true },
  { id: 'F-BF', name: 'F Series AcrylX™ Barrier-Free', series: 'F Series', category: 'Barrier-Free', size: 'Multiple', type: 'RTM AcrylX curbless ADA', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg', ada: true },
  { id: 'SR-BF', name: 'Saflor® Barrier-Free', series: 'S Series', category: 'Barrier-Free', size: 'Multiple', type: 'Compression-molded BF ADA', image: '/images/ada/3562h/3562h-ada-deco.jpg', ada: true },
  { id: '3562H', name: 'Model 3562H ADA Roll-In', series: 'T Series', category: 'Barrier-Free', size: '35×62', type: 'Roll-In terrazzo ADA', image: '/images/ada/3562h/3562h-ada-deco.jpg', ada: true },
  // Mop & Utility Sinks
  { id: 'WM-2222', name: 'Terrazzo Mop Sink WM-2222', series: 'Terrazzo', category: 'Mop Sinks', size: '22×22', type: 'Wall-mount terrazzo', image: '/images/sinks/wm20/3648terrazo-sr17-wm20-deco.jpg' },
  { id: 'SR-1720', name: 'Terrazzo Mop Sink SR-1720', series: 'Terrazzo', category: 'Mop Sinks', size: '17×20', type: 'Floor-mount terrazzo', image: '/images/sinks/sr17/sr17-drop-in-zoom.jpg' },
  { id: 'FM-2222', name: 'Utility Sink FM-2222', series: 'Terrazzo', category: 'Mop Sinks', size: '22×22', type: 'Freestanding utility', image: '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-front-crop.jpg' },
  { id: 'FM-4521', name: 'Utility Sink FM-4521', series: 'Terrazzo', category: 'Mop Sinks', size: '45×21', type: 'Freestanding utility', image: '/images/Utilities/crop/jpg/florestone-fmd-utilitysink-4521-wht-front-crop.jpg' },
  // Shower Walls
  { id: 'WALLS-3060', name: 'Shower Wall Surround 30×60', series: 'F Series', category: 'Shower Walls', size: '30×60', type: 'Wall panels', image: '/images/shower-walls/3060-walls/6030rtmbase-3060walls-deco.jpg' },
];

export const ALL_SERIES = ['S Series', 'F Series', 'T Series', 'Terrazzo'];
export const ALL_CATEGORIES = ['Shower Bases', 'Shower Stalls', 'Shower Walls', 'Barrier-Free', 'Mop Sinks'];
