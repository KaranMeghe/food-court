/* eslint-disable react/react-in-jsx-scope */
import Legal from "./Legal";
import useGetLegal from "../utils/UseGetLegal";

const SupportLegal = () => {
  const legal = useGetLegal();
  console.log(legal);

  return (
    <div className="w-100">
<<<<<<< HEAD
      <h3 className="my-2">Legal</h3>
=======
      <h2 className="my-3">Legal</h2>
>>>>>>> route
      {legal.map((data) => {
        return (
          <Legal key={data.id} data={data} className="d-flex flex-column" />
        );
      })}
    </div>
  );
};

export default SupportLegal;
