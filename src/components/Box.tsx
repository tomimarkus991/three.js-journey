interface Props {
  color: number;
}

export const Box = ({ color }: Props) => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};
