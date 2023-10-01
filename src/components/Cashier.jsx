import { Link } from "react-router-dom";

const Cashier = (props) => {
  let totalItems = 0;
  for (const item of props.items) {
    totalItems += item.quantity;
  }

  return (
    <div className="flex justify-between flex-col w-1/5 rounded-lg bg-indigo-100 p-4 m-2 shadow-md">
      <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 uppercase">
        Table : {props.id_tables}
      </h5>
      <div className="py-3">
        <p className="mb-2">Total Item : {totalItems}</p>
        <p>
          Total : <span className="font-bold">Rp.{props.total}.000</span>
        </p>
      </div>
      <Link
        to={{
          pathname: `../receipt/${props.id_orders}`,
          query: { id: props.id_orders },
        }}
        type="button"
        className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white text-center"
      >
        Print Struk
      </Link>
    </div>
  );
};

export default Cashier;
