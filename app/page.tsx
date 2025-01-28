import ProductOverviewPanel from "./components/ProductOverviewPanel";
import SalesGraph from "./components/SalesGraph";
import SalesTable from "./components/SalesTable";
import { fetchData } from "./api/serverActions";

export default async function IndexPage() {
  const data = await fetchData();

  return (
    <div id='home-page-container' className='page-container grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-0'>
      <div id='home-left-panel' className='col-span-1 w-full lg:p-2 flex lg:flex-col'>
        <ProductOverviewPanel product={data[0]} />
      </div>
      <div id='home-right-panel' className='col-span-1 flex flex-col w-full h-full lg:p-2 lg:col-span-4'>
        <div className="flex flex-col gap-5 lg:gap-16 flex-grow">
          <SalesGraph sales={data[0].sales} />
          <SalesTable sales={data[0].sales} />
        </div>
      </div>
    </div>
  );
}