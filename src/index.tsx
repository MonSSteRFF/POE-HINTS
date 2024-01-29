import '@/styles/index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import AudioSounds from '@/components/effect/AudioSounds';

import AppRouter from './router/AppRouter';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <HashRouter>
    <AppRouter />
    <AudioSounds />
  </HashRouter>,
);
