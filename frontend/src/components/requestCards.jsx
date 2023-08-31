import { Link } from "react-router-dom";

function ServiceCards() {
  const servCards = [
    {
      title: "Sample Request 1",
      description: "description Sample Request 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "/seeker-view",
    },
    {
      title: "Sample Request 2",
      description: "description Sample Request 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "/seeker-view",
    },
    {
      title: "Sample Request 3",
      description: "description Sample Request 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "/seeker-view",
    },
    {
      title: "Sample Request 4",
      description: "description Sample Request 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "/seeker-view",
    },
    {
      title: "Sample Request 5",
      description: "description Sample Request 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
      link: "/seeker-view",
    },
    {
        title: "Sample Request 6",
        description: "description Sample Request 6",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/seeker-view",
      },
      {
        title: "Sample Request 7",
        description: "description Sample Request 7",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/seeker-view",
      },
      {
        title: "Sample Request 8",
        description: "description Sample Request 8",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/seeker-view",
      },
      {
        title: "Sample Request 9",
        description: "description Sample Request 9",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/seeker-view",
      },
      {
        title: "Sample Request 10",
        description: "description Sample Request 10",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/seeker-view",
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
            <button className="">
              <Link to={e.link}>View Request</Link>
            </button>
          </div>
        </div>
      </>
    );
  });
  return <div className="App">{serviceCards}</div>;
}

export default ServiceCards;
