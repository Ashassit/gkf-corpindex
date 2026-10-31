import { useParams } from "react-router-dom";
import { IvyApplicationForm } from "./IvyApplicationForm";

export function ApplyPage() {
  const { institutionName } = useParams();

  return (
    <div className="min-h-screen py-10 px-4 m-20">
      <IvyApplicationForm institutionName={institutionName} />
    </div>
  );
}