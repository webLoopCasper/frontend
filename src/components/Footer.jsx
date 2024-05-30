export function Footer({ data }) {
  return (
    <footer>
      <div className="border-t border-b  border-softblack">
        <div className="flex items-center justify-between h-16 max-w-screen-lg px-4 mx-auto sm:px-12 ">
          <p className="fair">J.Antony Produktion</p>
          <div className="flex items-center ">
            <a className="block px-2 py-1 border-r border-softblack" href="">
              <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.5833 0.25C34.6884 0.25 35.7482 0.688987 36.5296 1.47039C37.311 2.25179 37.75 3.3116 37.75 4.41667V33.5833C37.75 34.6884 37.311 35.7482 36.5296 36.5296C35.7482 37.311 34.6884 37.75 33.5833 37.75H4.41667C3.3116 37.75 2.25179 37.311 1.47039 36.5296C0.688987 35.7482 0.25 34.6884 0.25 33.5833V4.41667C0.25 3.3116 0.688987 2.25179 1.47039 1.47039C2.25179 0.688987 3.3116 0.25 4.41667 0.25H33.5833ZM32.5417 32.5417V21.5C32.5417 19.6987 31.8261 17.9712 30.5524 16.6976C29.2787 15.4239 27.5513 14.7083 25.75 14.7083C23.9792 14.7083 21.9167 15.7917 20.9167 17.4167V15.1042H15.1042V32.5417H20.9167V22.2708C20.9167 20.6667 22.2083 19.3542 23.8125 19.3542C24.586 19.3542 25.3279 19.6615 25.8749 20.2084C26.4219 20.7554 26.7292 21.4973 26.7292 22.2708V32.5417H32.5417ZM8.33333 11.8333C9.26159 11.8333 10.1518 11.4646 10.8082 10.8082C11.4646 10.1518 11.8333 9.26159 11.8333 8.33333C11.8333 6.39583 10.2708 4.8125 8.33333 4.8125C7.39955 4.8125 6.50401 5.18344 5.84373 5.84373C5.18344 6.50401 4.8125 7.39955 4.8125 8.33333C4.8125 10.2708 6.39583 11.8333 8.33333 11.8333ZM11.2292 32.5417V15.1042H5.45833V32.5417H11.2292Z" fill="#323330" />
              </svg>
            </a>
            <a className="block px-2 py-1" href="">
              <svg width="31" height="20" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7026 17.668L20.5041 21.538L26.0965 17.774L38.6322 29.84C38.3022 29.944 37.9496 30 37.5826 30H3.41735C2.96635 30 2.53585 29.914 2.1402 29.76L14.7026 17.668ZM41 7.752V26.666C41 27.16 40.8893 27.628 40.6925 28.05L28.4048 16.222L41 7.752ZM1.93438e-06 7.858L12.3861 16.122L0.217302 27.838C0.0731783 27.4633 -0.000435078 27.0662 1.93438e-06 26.666V7.858ZM37.5826 0C39.4686 0 41 1.492 41 3.334V4.506L20.4959 18.296L1.93438e-06 4.62V3.334C1.93438e-06 1.494 1.5293 0 3.41735 0H37.5826Z" fill="#323330" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg px-4 py-8 mx-auto sm:flex sm:px-12">
        <div className="flex flex-wrap sm:w-3/6">
          <a className="block w-3/6 py-16 font-bold text-center border-b  hover:underline border-softblack" href={data.footerLink[0].url}>
            {data.footerLink[0].text}
          </a>
          <a className="block w-3/6 py-16 font-bold text-center border-b border-l hover:underline border-softblack" href={data.footerLink[1].url}>
            {data.footerLink[1].text}
          </a>
          <a className="block w-3/6 py-16 font-bold text-center hover:underline" href={data.footerLink[2].url}>
            {data.footerLink[2].text}
          </a>
          <a className="block w-3/6 py-16 font-bold text-center border-l hover:underline border-softblack" href={data.footerLink[3].url}>
            {data.footerLink[3].text}
          </a>
        </div>
        <div className="max-w-screen-lg py-4 sm:pl-8 sm:w-3/6 ">
          <p className="pb-4 text-2xl fair">{data.headline}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </footer>
  );
}
