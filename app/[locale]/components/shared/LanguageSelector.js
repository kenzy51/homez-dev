import Link from "next-intl/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LanguageSelector = () => {
  const router = useRouter();
  return (
    <div className="" style={{display:'flex', columnGap:'10px'}}>
      <Link href="/" locale="en">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
          }
          width={40}
          height={30}
        />
      </Link>
      <Link href="/" locale="ru">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
          }
          width={40}
          height={30}

        />{" "}
      </Link>
    </div>
  );
};

export default LanguageSelector;
