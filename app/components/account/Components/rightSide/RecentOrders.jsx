import React from "react";

function RecentOrders({ columns, data }) {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full mt-7">
      <p className="py-3 px-3">Recent Orders</p>
      <table className="w-full">
        <thead className="bg-[#52b9c5]">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="p-3 text-base font-normal">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-3 text-center text-[14px]">
                  {column.key === "manage" ? (
                    <button className="cursor-pointer border border-[#52b9c5] p-1 rounded-lg hover:bg-[#52b9c5] ">
                      Manage
                    </button>
                  ) : (
                    rowData[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;
