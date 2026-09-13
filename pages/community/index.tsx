import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
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

export default withLayoutBasic(Community);
