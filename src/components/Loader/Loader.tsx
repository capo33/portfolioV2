import { Button } from "..";
import { LoaderSVG } from "../../assets/svg/NavSVG";

const Loader = () => {
  return (
    <div className='flex justify-center'>
      <Button loading={true}>
        {LoaderSVG()}
        Loading...
      </Button>
    </div>
  );
};

export default Loader;
