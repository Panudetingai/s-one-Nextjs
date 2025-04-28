import { BiIcon } from "@/components/BiIcon";
import { Navigation } from "@/components/Navigation";
import { NewsIconMenu } from "@/components/NewsIconMenu";
export default function Home() {
  return (
    <main className="flex flex-col gap-2 justify-center mx-auto lg:max-w-[74rem]">
      <Navigation />
      <div className="banner flex flex-col md:flex-row gap-4 md:gap-1 w-full">
        <div className="card-item1 flex flex-col w-full md:w-[288px] border border-[#F05A28] flex-[1]">
          <div className="cardheader bg-[#F05A28] p-1 text-white w-full">
            <h1 className="text-xl">ค้นหายาง</h1>
          </div>
          <div className="cardbody bg-[url(/assets/images/SOne_index_bg_searchtype.jpg)] h-auto min-h-[264px] md:h-[264px] w-full md:w-[288px] relative bg-cover bg-center py-4">
            <div className="md:absolute md:left-[6.5rem] md:top-2 text-white w-full md:w-3/5 px-4 md:px-0">
              <div>
                <h1 className="leading-4">หน้ายาง</h1>
                <p className="text-xs">ความกว้าง (มม.)</p>
                <select
                  className="w-full text-sm bg-white text-black"
                >
                  <option value="0">--เลือกหน้ายาง--</option>
                </select>
              </div>
              <div className="mt-3">
                <h1 className="leading-4">ซีรี่ย์</h1>
                <p className="text-xs">อัตราส่วนความสูงแก้มยาง (%)</p>
                <select
                  className="w-full text-sm bg-white text-black"
                >
                  <option value="0">--เลือกซีรี่ย์--</option>
                </select>
              </div>
              <div className="mt-4">
                <h1 className="leading-4">กระทะล้อ</h1>
                <p className="text-xs">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                <select
                  className="w-full text-sm bg-white text-black"
                >
                  <option value="0">--เลือกกระทะล้อ--</option>
                </select>
              </div>
              <button className="mt-4 flex mx-auto md:ml-8">
                <img
                  src={"/assets/images/SOne_index_search.png"}
                  className="cursor-pointer"
                  alt="Search"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border w-full h-[300px] sm:h-[300px] bg-[url(/assets/images/SOne_index_banner.jpg)] relative bg-cover bg-center">
          <div
            className="absolute right-2 m-2"
          >
            <div className="flex flex-col items-center gap-2">
              <img
                src="/assets/images/SOne_index_arrowup.png"
                className="cursor-pointer hidden sm:block"
                alt="Arrow Up"
              />
              <div className="flex sm:flex-col gap-2">
                {Array.from({ length: 3 }, (_, index) => (
                  <img
                    key={index}
                    src={
                      index === 0 ? "/assets/images/SOne_index_pic01.jpg" : "/assets/images/SOne_index_pic02.jpg"
                    }
                    className={`w-12 sm:w-auto ${index === 0 ? "border border-[#F05A28]" : ""}`}
                    alt={`Banner thumbnail ${index + 1}`}
                  />
                ))}
              </div>
              <img
                src="/assets/images/SOne_index_arrowdown.png"
                className="cursor-pointer hidden sm:block"
                alt="Arrow Down"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row gap-2 w-full overflow-x-auto py-2">
        <BiIcon />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="card-item1 flex flex-col w-full lg:w-[288px] gap-1 border border-[#F05A28]">
          <div className="cardheader bg-[#F05A28] p-1 text-white">
            <h1 className="text-xl">ค้นหาศูนย์บริการใกล้บ้านคุณ</h1>
          </div>
          <div className="cardbody bg-[#252525] min-h-[200px] relative text-white p-2">
            <div className="flex flex-col items-center m-2 md:m-4 gap-2">
              <div className="flex gap-2 items-center w-full">
                <p className="text-md w-20 text-right">จังหวัด</p>
                <select
                  className="bg-white text-black text-sm p-0 flex-1"
                >
                  <option value="0">--เลือกจังหวัด--</option>
                </select>
              </div>
              <div className="flex gap-2 items-center w-full">
                <p className="text-md w-20 text-right">เขต/อำเภอ</p>
                <select
                  className="bg-white text-black text-sm p-0 flex-1"
                >
                  <option value="0">--เลือกเขต/อำเภอ--</option>
                </select>
              </div>
              <div className="flex gap-2 items-center w-full">
                <p className="text-md w-20 text-right">ถนน</p>
                <select
                  className="bg-white text-black text-sm p-0 flex-1"
                >
                  <option value="0">--เลือกถนน--</option>
                </select>
              </div>
              <span className="text-[#F05A28] text-sm text-center">
                หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
              </span>
              <button className="flex md:ml-20">
                <img
                  src={"/assets/images/SOne_index_search.png"}
                  className="cursor-pointer"
                  alt="Search"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="News border border-[#F05A28] flex flex-col gap-2 w-full lg:w-[600px] relative">
          <div className="absolute bottom-0 right-0 w-full h-1 bg-[#F05A28]" />
          <div className="news-header flex justify-between border-b border-[#F05A28] px-1 py-1">
            <h1 className="">News & Events</h1>
            <div className="flex gap-1 items-center">
              <NewsIconMenu />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 px-2 relative py-2">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="flex mb-4 sm:mb-0 w-full sm:w-1/3">
                <div className="flex flex-col gap-1 w-full">
                  <div className="relative w-full">
                    <div className="absolute top-0 left-0 bg-zinc-700/70 w-1/4 leading-3.5 text-[.7rem] text-white m-1 text-center p-1">
                      19
                      NOV
                      2014
                    </div>
                    <img
                      className="object-cover w-full h-auto"
                      src={"/assets/images/SOne_index_pic3.jpg"}
                      alt={`News ${index + 1}`}
                    />
                    {index === 0 && (
                      <div className="bg-[#F05A28] absolute h-1 bottom-0 w-full" />
                    )}
                  </div>
                  <a className="cursor-pointer text-xs hover:underline py-1 leading-4 max-sm:text-base md:text-base">
                    ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                    และกิจกรรมข่าวและกิจกรรมข่าว
                    และกิจกรรม
                  </a>
                </div>
                {index < 2 && (
                  <div className="hidden sm:block h-[145px] w-[1px] bg-[#ff7345] mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-80">
          <div className="flex flex-col sm:flex-row lg:flex-col">
            <div className="flex w-full">
              <img
                src={"/assets/images/SOne_index_tips1.png"}
                className="object-cover h-auto"
                alt="Tips Left"
              />
              <div className="bg-[url(/assets/images/SOne_index_tips2.png)] flex flex-col gap-2 flex-1 ">
                <h1 className="text-md text-[#f05a28] text-center mt-1">Safety Tips</h1>
                <div className="flex items-center flex-col">
                  <img
                    src={"/assets/images/SOne_index_pic66.png"}
                    width={13}
                    alt="Quote Open"
                    className="mr-auto ml-2"
                  />
                  <p className="text-sm mx-2 text-center text-white">
                    ควรเติมน้ำมันตอนเช้า
                    ขณะที่อุณหภูมิบนพื้น
                    ดินยังเย็นอยู่
                  </p>
                  <img
                    src={"/assets/images/SOne_index_pic99.png"}
                    width={13}
                    className="ml-auto mr-2"
                    alt="Quote Close"
                  />
                </div>
              </div>
              <img
                src={"/assets/images/SOne_index_tips3.png"}
                className="object-cover h-auto"
                alt="Tips Right"
              />
            </div>
          </div>
          <div className="search flex flex-col sm:flex-row items-center gap-2">
            <h1 className="text-nowrap text-md">
              สมัครรับข่าวสาร
            </h1>
            <div className="search-icon flex items-center border flex-row border-orange-500 pl-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="กรุณาใส่อีเมล์"
                className="focus:outline-none text-sm w-full"
              />
              <button
                type="button"
                className="w-max cursor-pointer"
              >
                <img
                  src="/assets/images/SOne_index_btgo.jpg"
                  alt="Search Icon"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
          <hr className="border-t border-[#ff7345] w-full border-dashed" />
          <img
            className="w-full max-w-[270px] h-auto mx-auto"
            src={"/assets/images/SOne_index_call.png"}
            alt="Call"
          />
        </div>
      </div>
      <footer className="flex items-center my-2 w-full">
        <img
          src={"/assets/images/SOne_index_logos.png"}
        />
        <div className="rounded-md w-full bg-[#252525]">
          <p className="text-white text-xs py-2 px-1">Copyright © 2014</p>
        </div>
      </footer>
    </main>
  );
}
