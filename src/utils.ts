import CFG from './cfg';

export const setResponsiveWidth = (sprite, percent, parent) => {
  let percentWidth = (sprite.texture.width - (parent.width / (100 / percent))) * 100 / sprite.texture.width
  sprite.width = parent.width / (100 / percent)
  sprite.height = sprite.texture.height - (sprite.texture.height * percentWidth / 100)
}

export function MapToISO(x,y) {
  return [
    x * CFG.TILE.W/2 - y * CFG.TILE.W/2,
    x * CFG.TILE.H/4 + y * CFG.TILE.H/4
  ];
}