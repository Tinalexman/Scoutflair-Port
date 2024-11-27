import EditAcademy from "@/src/components/dashboard/scout/academies/edit/EditAcademy";

export const metadata = {
  title: "Edit Academy",
};

export default function Home(params: any) {
  const id: any = { params };
  return <EditAcademy id={id} />;
}
