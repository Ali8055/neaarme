import React from "react";
import ProfileCard from "./ProfileCard";
import AddressCard from "./AddressCard";
import RecentOrders from "./RecentOrders";

function ManageMyAccount() {
  const address = [
    {
      label: "Address Book",
      default: "Default Delivery Address",
      address:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatedoloribus possimu",
      location: "Punjab - Rawalpindi - Chakala - Scheme 2",
      Number: "(+92) 3847847878",
      name: "linta khan",
      button: "Edit",
    },
    {
      label: "",
      button: "",
      default: "Default Billing Address",
      address:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatedoloribus possimu",
      location: "Punjab - Rawalpindi - Chakala - Scheme 2",
      Number: "(+92) 3847847878",
      name: "linta khan",
    },
  ];

  const columns = [
    { key: "orders", title: "Order #" },
    { key: "placedOn", title: "Placed On" },
    { key: "items", title: "Items" },
    { key: "total", title: "Total" },
    { key: "manage", title: "" },
  ];
  const columnData = [
    {
      orders: "180621018040876",
      placedOn: "27/02/2024",
      items: "picture",
      total: "Rs. 1,357",
    },
    {
      orders: "180621018040876",
      placedOn: "27/02/2024",
      items: "picture",
      total: "Rs. 1,357",
    },
    {
      orders: "180621018040876",
      placedOn: "27/02/2024",
      items: "picture",
      total: "Rs. 1,357",
    },
  ];
  return (
    <div>
      {" "}
      <p className="text-xl">Manage My Account</p>
      <div className="my-4 flex gap-4">
        <ProfileCard />
        {address.map((val) => (
          <AddressCard val={val} />
        ))}
      </div>
      <RecentOrders data={columnData} columns={columns} />
    </div>
  );
}

export default ManageMyAccount;
