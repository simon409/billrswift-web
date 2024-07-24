const HeaderSection = () => {
  return (
    <section id="header" className="flex w-full justify-between">
        <div>
          <h1 className='text-xlarge font-bold leading-8'>Messages</h1>
        </div>
        <div className="flex items-center gap-medium">
          <span>Welcome back! <span className="font-bold 3-custom">Fadi Anarchi</span></span>
          <div className="flex flex-row justify-between p-2 bg-white rounded-md w-[346px] px-3 py-3">
            <div className="flex gap-medium items-center">
              <img
                src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-[59px] h-[59px] rounded-md"
                alt=""
              />
              <button className="flex items-center gap-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                    <g id="Interface_Log_Out" data-name="Interface / Log_Out" transform="translate(-3 -3)">
                      <path
                        id="Vector"
                        d="M12.125,8.873V8.8a7.456,7.456,0,0,1,.327-3.163,3,3,0,0,1,1.311-1.311A7.456,7.456,0,0,1,16.925,4h6.9a7.447,7.447,0,0,1,3.161.327A3,3,0,0,1,28.3,5.638,7.443,7.443,0,0,1,28.625,8.8v14.41a7.436,7.436,0,0,1-.327,3.156,3,3,0,0,1-1.312,1.311A7.436,7.436,0,0,1,23.83,28H16.92a7.443,7.443,0,0,1-3.158-.327,3,3,0,0,1-1.311-1.312,7.45,7.45,0,0,1-.327-3.161v-.075"
                        transform="translate(-0.625)"
                        fill="none"
                        stroke="#939399"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <g id="Arrow_Arrow_Down_SM" data-name="Arrow / Arrow_Down_SM" transform="translate(4 19.692) rotate(-90)">
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M3.692,0V12.923m0,0L7.385,9.231M3.692,12.923,0,9.231"
                          fill="none"
                          stroke="#e76936"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <span>Logout</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29.25" viewBox="0 0 24 29.25">
                  <g id="Group_79" data-name="Group 79" transform="translate(-1713 -72)">
                    <path
                      id="Icon_material-notifications-none"
                      data-name="Icon material-notifications-none"
                      d="M18,33a3.009,3.009,0,0,0,3-3H15A3.009,3.009,0,0,0,18,33Zm9-9V16.5c0-4.6-2.445-8.46-6.75-9.48V6a2.25,2.25,0,0,0-4.5,0V7.02C11.46,8.04,9,11.88,9,16.5V24L6,27v1.5H30V27Zm-3,1.5H12v-9c0-3.72,2.265-6.75,6-6.75s6,3.03,6,6.75Z"
                      transform="translate(1707 68.25)"
                      fill="rgba(39,39,51,0.8)"
                    />
                    <circle id="Ellipse_5" data-name="Ellipse 5" cx="3.5" cy="3.5" r="3.5" transform="translate(1730 75)" fill="#e42e45" />
                  </g>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8">
                  <defs>
                    <clipPath id="clip-path">
                      <rect width="8" height="27" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="Repeat_Grid_3" data-name="Repeat Grid 3" transform="translate(27) rotate(90)" opacity="0.8">
                    <g transform="translate(-1850 -68)">
                      <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" transform="translate(1851 69)" fill="#272733" />
                    </g>
                    <g transform="translate(-1850 -59)">
                      <circle id="Ellipse_6-2" data-name="Ellipse 6" cx="3" cy="3" r="3" transform="translate(1851 69)" fill="#272733" />
                    </g>
                    <g transform="translate(-1850 -50)">
                      <circle id="Ellipse_6-3" data-name="Ellipse 6" cx="3" cy="3" r="3" transform="translate(1851 69)" fill="#272733" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeaderSection