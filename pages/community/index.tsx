import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT -- PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      Community List{" "}
      <button
        onClick={() => alert("Helli MIT -- PAGES ROUTER")}
        style={{ margin: "15px" }}
      >
        Press me
      </button>
    </div>
  );
};

export default Community;
