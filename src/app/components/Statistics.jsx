import React from "react";
const Statistics = () => {
  return (
    <>
      <div class="bg-white pb-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover Knowledge at Krantikari Library
              </h2>
              <p class="mt-4 text-lg leading-8 text-gray-600">
              Krantikari Library, a trusted source for inspiration and knowledge. Explore, learn, and embark on literary journeys with us.
              </p>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Active Users
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  345
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Books Available
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  1.2k
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Borrowed Books
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  546
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Satisfied Students
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  98%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
