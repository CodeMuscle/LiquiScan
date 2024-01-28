import { FaArrowRightLong } from 'react-icons/fa6'

const Action = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="p-6 rounded-xl bg-default-950/40">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex-shrink">
              <div className="flex -space-x-2">
                {[1,2,3].map((img, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    src={`/assets/images/avatars/img-${index+1}.png`}
                    alt="image-des"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                  />
                ))}

                <button className="h-10 w-10 font-medium text-primary rounded-full bg-white">
                  80+
                </button>
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-medium text-default-200">
                  Want a project similar to this?
              </h3>
              <p className="w-3/4 text-base font-medium text-default-300 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="flex-shrink">
              <a href="https://ganeshgovind.in" target='_blank' rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300 ">
                Contact the developer <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Action
