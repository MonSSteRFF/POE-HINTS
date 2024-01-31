import { E_AnotherEssences } from '@/assets/icons/essence/EssenceImageList';

type T_DS_AnotherEssenceList = {
  [keys in E_AnotherEssences]: {
    name: string;
    header: string[][];
    stats: string[];
    description: string[];
  };
};

const allEssenceHeader = {
  header: [
    ['Stack size: ', '9'],
    ['Essence Tier: ', '8'],
  ],
};
const allEssenceDescription = {
  description: ['Right click this item then left click a normal or rare item to apply it.'],
};

const DS_AnotherEssenceList: T_DS_AnotherEssenceList = {
  [E_AnotherEssences.Delirium]: {
    ...allEssenceHeader,
    ...allEssenceDescription,
    name: 'Essence of Delirium',
    stats: [
      'Upgrades a normal item to rare or reforges a rare item, guaranteeing one property',
      'Weapon: Your Hits inflict Decay, dealing 700 Chaos Damage per second for 8 seconds',
      'Gloves: Socketed Gems deal 30% more Damage over Time',
      'Boots: Cannot be Poisoned',
      'Body Armour: 25% reduced Chaos Damage taken over time',
      'Helmet: +2 to Level of Socketed Aura Gems',
      'Shield: +15% Chance to Block Spell Damage while on Low Life',
      'Quiver: 25% increased Effect of your Marks',
      'Amulet: (6-7)% Chance to Block Spell Damage',
      'Ring: +(12-15)% to Damage over Time Multiplier',
      'Belt: +50% to Chaos Resistance during any Flask Effect',
    ],
  },
  [E_AnotherEssences.Horror]: {
    ...allEssenceHeader,
    ...allEssenceDescription,
    name: 'Essence of Horror',
    stats: [
      'Upgrades a normal item to rare or reforges a rare item, guaranteeing one property',
      'Weapon: 16% chance to gain a Power, Frenzy or Endurance Charge on Kill',
      'Gloves: Socketed Gems have +3.5% Critical Strike Chance',
      'Boots: 5% reduced Elemental Damage Taken while stationary',
      'Body Armour: 15% of Physical Damage from Hits taken as Cold Damage',
      'Helmet: Socketed Gems deal 30% more Elemental Damage',
      'Shield: Chill Nearby Enemies when you Block',
      'Quiver: 8 to 12 Added Cold Damage per Frenzy Charge',
      'Amulet: (15-25)% chance to Crush on Hit',
      'Ring: 4 to 7 Added Cold Damage per Frenzy Charge',
      `Belt: Gain Alchemist's Genius when you use a Flask`,
    ],
  },
  [E_AnotherEssences.Hysteria]: {
    ...allEssenceHeader,
    ...allEssenceDescription,
    name: 'Essence of Hysteria',
    stats: [
      'Upgrades a normal item to rare or reforges a rare item, guaranteeing one property',
      'Weapon: Cast Level 20 Fire Burst on Hit',
      'Gloves: Socketed Gems deal 175 to 225 Added Fire Damage',
      'Boots: Drops Burning Ground while moving, dealing 2500 Fire Damage per second for 4 seconds',
      'Body Armour: 25% increased Area of Effect',
      'Helmet: Socketed Gems deal 30% more Damage while on Low Life',
      `Shield: Adds 60 to 100 Fire Damage if you've Blocked Recently`,
      'Quiver: Gain 15% of Physical Damage as Extra Fire Damage',
      'Amulet: 150% increased total Recovery per second from Life Leech',
      'Ring: Gain 10% of Physical Damage as Extra Fire Damage',
      'Belt: Damage Penetrates 5% Elemental Resistances during any Flask Effect',
    ],
  },
  [E_AnotherEssences.Insanity]: {
    ...allEssenceHeader,
    ...allEssenceDescription,
    name: 'Essence of Insanity',
    stats: [
      'Upgrades a normal item to rare or reforges a rare item, guaranteeing one property',
      'Weapon: Triggers Level 20 Spectral Spirits when Equipped',
      '+3 to maximum number of Spectral Spirits',
      'Gloves: Socketed Gems have 16% more Attack and Cast Speed',
      'Boots: 70% increased Mana Regeneration Rate while Shocked',
      'Body Armour: You gain Onslaught for 6 seconds when Hit',
      'Helmet: Socketed Gems gain 50% of Physical Damage as extra Lightning Damage',
      'Shield: 25% chance to gain a Power Charge when you Block',
      'Quiver: Projectiles Pierce 2 additional Targets',
      'Amulet: 10% chance to Recover 10% of Mana when you use a Skill',
      'Ring: You and your Minions take 40% reduced Reflected Damage',
      'Belt: 10% increased Movement Speed during any Flask Effect',
    ],
  },
  [E_AnotherEssences.Remnant_of_corruption]: {
    ...allEssenceHeader,
    name: 'Remnant of Corruption',
    stats: ['Corrupts the Essences trapping a monster, modifying them unpredictably'],
    description: [
      'Right click this item then left click a monster trapped by Essences to corrupt them. Corrupted Essences cannot be modified again.',
    ],
  },
};

export { DS_AnotherEssenceList };
