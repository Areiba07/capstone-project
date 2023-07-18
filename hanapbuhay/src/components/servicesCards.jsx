import { Link } from "react-router-dom";

function ServiceCards() {
  const servCards = [
    {
      title: "Sample Service 1",
      description: "description Sample Service 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "",
    },
    {
      title: "Sample Service 2",
      description: "description Service 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "",
    },
    {
      title: "Sample Service 3",
      description: "description Sample Service 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "",
    },
    {
      title: "Sample Service 4",
      description: "description Sample Service 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "",
    },
    {
      title: "Sample Service 5",
      description: "description Sample Service 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "",
    },
    {
        title: "Sample Service 6",
        description: "description Sample Service 6",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "",
      },
      {
        title: "Sample Service 7",
        description: "description Service 7",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "",
      },
      {
        title: "Sample Service 8",
        description: "description Sample Service 8",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "",
      },
      {
        title: "Sample Service 9",
        description: "description Sample Service 9",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "",
      },
      {
        title: "Sample Service 10",
        description: "description Sample Service 10",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "",
      },
    
  ];
  const serviceCards = servCards.map((e, index) => {
    return (
      <>
        <div className="Card ml-20 mt-10">
          <img src={e.image} alt="Nature" />
          <div className="CardContent">
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <button>
              <Link to={e.link}>Read more</Link>
            </button>
          </div>
        </div>
      </>
    );
  });
  return <div className="App">{serviceCards}</div>;
}

export default ServiceCards;