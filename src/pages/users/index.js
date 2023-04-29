import Parent from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";

const Users = () => {
  return (
    <>
      {/* <Parent> */}
      <div className="container">
        <div className="card">
          <div className="filter">
            <p>Filter</p>
            <select>
              <option>Date</option>
            </select>
            <select>
              <option>Name</option>
            </select>
            <button type="submit">
              Export <BiDownload size={20} />
            </button>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="user-date">Date</p>
              <p className="user-name">Name</p>
              <p className="user-email">Email</p>
              <p className="user-reference">Reference</p>
              <p className="user-view">View</p>
            </div>
            <div className="table-body">
              <p className="user-date">7/11/2022</p>
              <div className="user-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="user-email">hamidul3@gmail.com</p>
              <p className="user-reference">8hg4xcvv</p>
              <p className="user-view">
                <Link href="/users/user?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <p className="user-date">7/11/2022</p>
              <div className="user-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="user-email">hamidul3@gmail.com</p>
              <p className="user-reference">8hg4xcvv</p>
              <p className="user-view">
                <Link href="/users/user?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <p className="user-date">7/11/2022</p>
              <div className="user-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="user-email">hamidul3@gmail.com</p>
              <p className="user-reference">8hg4xcvv</p>
              <p className="user-view">
                <Link href="/users/user?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <p className="user-date">7/11/2022</p>
              <div className="user-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="user-email">hamidul3@gmail.com</p>
              <p className="user-reference">8hg4xcvv</p>
              <p className="user-view">
                <Link href="/users/user?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <p className="user-date">7/11/2022</p>
              <div className="user-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="user-email">hamidul3@gmail.com</p>
              <p className="user-reference">8hg4xcvv</p>
              <p className="user-view">
                <Link href="/users/user?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Parent> */}
    </>
  );
};

export default Users;
