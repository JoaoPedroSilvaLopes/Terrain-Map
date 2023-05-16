import { CubeMesh } from '../base-meshes';

const Player = () => {
  const player = CubeMesh({height: 1, position: {x: 0, y: 0}, color: "#ff0"})

  player.translateY(5)
  return player
};

export default Player;
