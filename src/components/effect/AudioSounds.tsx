import React from 'react';

import DivineOrb from '@/assets/sound/DivineOrb.mp3';

export enum Sound {
  DivineOrb = 'DivineOrb',
}

const AudioSounds = () => {
  return (
    <>
      <audio id="DivineOrb" src={DivineOrb} />
    </>
  );
};

export const playSound = (effect: Sound) => {
  const sounds: { [keys in Sound]: HTMLAudioElement | HTMLElement | null } = {
    [Sound.DivineOrb]: document.getElementById(Sound.DivineOrb),
  };

  const cur = sounds[effect] as HTMLAudioElement | null;

  if (cur === null) {
    return;
  }
  cur.currentTime = 0;
  cur.play();
};

export default AudioSounds;
