import ServicesList from "../components/servicesList";
import "../assets/styles/index.css";
export default function ServiceDirectory() {
  return (
    <>
      <h1>Service Directory</h1>
      {<ServicesList />}
    </>
  );
}