

import { PrismaClient } from "@repo/db/client";
const client  = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="text-2xl">
        hi from the web app!!
      </div>
    </div>
  );
}
