import EditPitch from "@/src/components/dashboard/scout/pitches/edit/EditPitch";

export const metadata = {
  title: "Edit Local Pitch",
};

export default function Home(params: any) {
  const id: any = { params };
  return <EditPitch id={id} />;
}
