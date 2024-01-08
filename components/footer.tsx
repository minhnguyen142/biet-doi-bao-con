import React from "react";

const date = new Date();

export default function Footer() {
  return (
    <div className="m-6">
      <p className="text-center text-gray-400">
        Copyright &copy; {date.getUTCFullYear()} by Biệt Đội Báo Con. Nghiên cấm
        sao chép dưới mọi hình thức!
      </p>
    </div>
  );
}
