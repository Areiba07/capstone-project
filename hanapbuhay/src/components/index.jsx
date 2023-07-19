import { Link } from "react-router-dom";

function Index() {
  const servCards = [
    {
      title: "Sample Provider 1",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 2",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 3",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 4",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 5",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 6",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 7",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 8",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
    {
      title: "Sample Provider 9",
      image:
        "https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg",
      link: "",
    },
  ];
  const serviceCards = servCards.map((e, index) => {
    return (
      <>
        <div className="Card ml-20 mt-10">
          <img src={e.image} alt="Nature" />
          <div className="CardContent ">
            <button className="ml-14">
              <Link to={e.link}>{e.title}</Link>
            </button>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="App">
      <h1>Partnered Service Providers</h1>
      {serviceCards}
      <a href="#">view more</a>
    </div>
  );
}

export default Index;
