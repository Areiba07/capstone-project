import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
function ServiceCards() {
  const servCards = [
    {
      title: "Sample Service 1",
      description: "description Sample Service 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/provider-view",
    },
    {
      title: "Sample Service 2",
      description: "description Service 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/provider-view",
    },
    {
      title: "Sample Service 3",
      description: "description Sample Service 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/provider-view",
    },
    {
      title: "Sample Service 4",
      description: "description Sample Service 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/provider-view",
    },
    {
      title: "Sample Service 5",
      description: "description Sample Service 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/provider-view",
    },
    {
        title: "Sample Service 6",
        description: "description Sample Service 6",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
          link: "/provider-view",
      },
      {
        title: "Sample Service 7",
        description: "description Service 7",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
          link: "/provider-view",
      },
      {
        title: "Sample Service 8",
        description: "description Sample Service 8",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
          link: "/provider-view",
      },
      {
        title: "Sample Service 9",
        description: "description Sample Service 9",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
          link: "/provider-view",
      },
      {
        title: "Sample Service 10",
        description: "description Sample Service 10",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU",
        link: "/provider-view",
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
            <Button href="/seeker-home/provider-view" gradientDuoTone="pinkToOrange">
              <Link to={e.link}>View Provider</Link>
            </Button>
          </div>
        </div>
      </>
    );
  });
  return <><h1>Services of Category Selected</h1><div className="App">{serviceCards}</div></>;
}

export default ServiceCards;
