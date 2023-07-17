import "../assets/styles/index.css";
import React, { useState } from "react";

const ServicesTable = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesAvailable = [
    {
      id: 1,
      serviceName: "Service 1",
      serviceProviders: ["Provider 1", "Provider 2", "Provider 3"],
    },
    {
      id: 2,
      serviceName: "Service 2",
      serviceProviders: ["Provider 4", "Provider 5", "Provider 6"],
    },
    {
      id: 3,
      serviceName: "Service 3",
      serviceProviders: ["Provider 7", "Provider 8", "Provider 9"],
    },
    {
      id: 4,
      serviceName: "Service 4",
      serviceProviders: ["Provider 10", "Provider 11", "Provider 12"],
    },
    {
      id: 5,
      serviceName: "Service 5",
      serviceProviders: ["Provider 13", "Provider 14", "Provider 15"],
    },
    {
      id: 6,
      serviceName: "Service 6",
      serviceProviders: ["Provider 16", "Provider 17", "Provider 18"],
    },
    {
      id: 7,
      serviceName: "Service 7",
      serviceProviders: ["Provider 19", "Provider 20", "Provider 21"],
    },
    {
      id: 8,
      serviceName: "Service 8",
      serviceProviders: ["Provider 22", "Provider 23", "Provider 24"],
    },
    {
      id: 9,
      serviceName: "Service 9",
      serviceProviders: ["Provider 25", "Provider 26", "Provider 27"],
    },
    {
      id: 10,
      serviceName: "Service 10",
      serviceProviders: ["Provider 28", "Provider 29", "Provider 30"],
    },
    {
      id: 11,
      serviceName: "Service 11",
      serviceProviders: ["Provider 31", "Provider 32", "Provider 33"],
    },
    {
      id: 12,
      serviceName: "Service 12",
      serviceProviders: ["Provider 34", "Provider 35", "Provider 36"],
    },
    {
      id: 13,
      serviceName: "Service 13",
      serviceProviders: ["Provider 37", "Provider 38", "Provider 39"],
    },
    {
      id: 14,
      serviceName: "Service 14",
      serviceProviders: ["Provider 40", "Provider 41", "Provider 42"],
    },
    {
      id: 15,
      serviceName: "Service 15",
      serviceProviders: ["Provider 43", "Provider 44", "Provider 45"],
    },
    {
      id: 16,
      serviceName: "Service 16",
      serviceProviders: ["Provider 46", "Provider 47", "Provider 48"],
    },
  ];

  const handleServiceClick = (service) => {
    if (selectedService === service.id) {
      setSelectedService(null);
    } else {
      setSelectedService(service.id);
    }
  };

  return (
    <div className="services-table">
      {servicesAvailable.map((service) => (
        <div
          key={service.id}
          className={`service-card ${
            selectedService === service.id ? "selected" : ""
          }`}
          onClick={() => handleServiceClick(service)}
        >
          <h3>{service.serviceName}</h3>
          {selectedService === service.id && (
            <div className="provider-dropdown">
              {service.serviceProviders.map((provider, index) => (
                <a key={index} href={`#${provider}`}>
                  {provider}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesTable;
