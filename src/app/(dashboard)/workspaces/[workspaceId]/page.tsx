import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="">
      Workspace Id
      <p>This is the workspace id page</p>
    </div>
  );
};

export default WorkspaceIdPage;
