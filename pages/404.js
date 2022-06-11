import {useEffect} from 'react';
import { useRouter } from "next/router";

const custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');

        }, 3000)
    }, [])

  return (
    <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
      <div className="px-6 py-4 rounded shadow-lg">
        <div className="mb-2 text-xl font-bold">
          404 - Sorry could not find this page 
        </div>
        {/* <p>Go back to the <Link href='/'><a>Homepage</a></Link></p> */}
      </div>
    </div>
  );
};

export default custom404;
