import Button from '@/lib/components/Button';
import Link from 'next/link';
import React from 'react'

const Success = () => {
  return (
      <div className="h-screen flex justify-center items-center">
          <div>
              <div className="bg-white p-6 md:mx-auto">
                  <svg
                      viewBox="0 0 24 24"
                      className="text-green-600 w-32 h-32 mx-auto my-6"
                  >
                      <path
                          fill="currentColor"
                          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                  </svg>
                  <div className="text-center">
                      <h3 className="md:text-5xl text-base text-green-600 font-semibold text-center">
                          Order Placed!
                      </h3>
                      <p className="text-gray-600 my-2">
                          Thank you for shopping from One Store.
                      </p>
                      <p className="mb-4">
                          {" "}
                          Your oder id:{" "}
                          <code className="font-bold">123456789</code>
                      </p>
                      <Link href={"/"}>
                          <Button
                              bgColor={"bg-green-600"}
                              textColor={"text-white"}
                          >
                              Back to home
                          </Button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Success