import { useParams } from "react-router-dom";

export const Lists = () => {
  const { menu } = useParams<{ menu: string }>();
  console.log(menu);
  return (
    <div>
      <h1>Lists</h1>
      <h2>{menu}</h2>
      <p>This is the Lists page .</p>
    </div>
  );
};
