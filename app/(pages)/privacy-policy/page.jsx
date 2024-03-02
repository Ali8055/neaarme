import React from "react";

function privacyPolicy() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-screen-xl my-8 p-7 mx-auto rounded-lg text-white bg-[rgba(24,57,106,0.25)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]">
      <p className="text-2xl">Privacy & Confidentiality</p>
      <div className="my-2 text-sm">
        <p className="py-1">
          Welcome to the nearMe.pk website (the "Site") Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Qui in nam ullam laudantium fugit
          esse quae est fugiat ratione libero veniam earum quod, doloremque iste
          nobis neque sed aspernatur voluptates!
        </p>
        <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
          {data.map((val) => (
            <li className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              blanditiis ullam iure voluptas dolorem, qui, laudantium illo fuga
              earum necessitatibus odio illum accusamus consectetur voluptatem
              nostrum numquam repellat nisi pariatur?
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default privacyPolicy;
