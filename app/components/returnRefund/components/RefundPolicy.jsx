import React from "react";

function RefundPolicy() {
  return (
    <div>
      <h1 className="text-xl my-3">Issuance of Refunds</h1>
      <p>
        If your product is eligible for a refund, you can choose your preferred
        refund method based on the table below. The shipping fee is refunded
        along with the amount paid for your returned product. The time required
        to complete a refund depends on the refund method you have selected. The
        refund time starts once the quality check is completed. (For quality
        check timelines refere table below)
      </p>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-[#52b9c5] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Item Type
              </th>
              <th scope="col" class="px-6 py-3">
                Drop Off At
              </th>
              <th scope="col" class="px-6 py-3">
                Pickup TAT
              </th>
              <th scope="col" class="px-6 py-3">
                Hand over to NearME WH
              </th>
              <th scope="col" class="px-6 py-3">
                QC TAT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-transparent border-b dark:border-gray-700 text-white">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                Non Bulky
              </th>
              <td class="px-6 py-4">4 working Days</td>
              <td class="px-6 py-4">4 working Days</td>
              <td class="px-6 py-4">1 - 5 working days</td>
              <td class="px-6 py-4">2 working days</td>
            </tr>
            <tr class="bg-transparent border-b dark:border-gray-700 text-white">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                Non Bulky
              </th>
              <td class="px-6 py-4">4 working Days</td>
              <td class="px-6 py-4">4 working Days</td>
              <td class="px-6 py-4">1 - 5 working days</td>
              <td class="px-6 py-4">2 working days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RefundPolicy;
