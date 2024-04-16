import Image from "next/image";
import pic from "../images/Rundeck.jpg";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 border rounded-lg overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="w-3/4">
            <AuroraBackgroundDemo />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-4/5">
            <Image
              src={pic}
              height="400" // Adjust the height as per your requirement
              width="800"
              alt="thumbnail"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
